import * as Yup from 'yup';
import { parseISO, addMonths, subDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Enrollment from '../models/Enrollment';
import Plan from '../models/Plan';
import Student from '../models/Student';

import EnrollmentMail from '../jobs/EnrollmentMail';
import Queue from '../../lib/Queue';

const { Op } = require('sequelize');

// PENDENTE CONFIGURAR NODEMAILER NO Controller.

class EnrollmentController {
  async store(req, res) {
    // Validate Schema
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { student_id, plan_id, start_date } = req.body;

    // Calculate the Total Price
    const studentPlan = await Plan.findByPk(plan_id);
    const { duration, price } = studentPlan;
    const totalPrice = duration * price;

    // Calculate the End Date of the Enrollment.
    // I subtracted one day at the end so it's possible to renroll ate the same day
    const parsedStartDate = parseISO(start_date);
    const parsedEndDate = subDays(addMonths(parsedStartDate, duration), 1);

    // Verificar se o aluno tem uma matricula vigente no período
    const enrollmentExists = await Enrollment.findOne({
      where: {
        student_id,
        end_date: {
          [Op.gte]: parsedStartDate,
        },
      },
      order: ['end_date'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    if (enrollmentExists !== null) {
      const { end_date, student } = enrollmentExists;
      const formattedDate = format(end_date, "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      });
      return res.json({
        message: `The student ${student.name} already has an active enrollment until ${formattedDate}.`,
      });
    }

    // Criar nova matrícula
    const enrollmentSave = await Enrollment.create({
      student_id,
      plan_id,
      price: totalPrice,
      start_date,
      end_date: parsedEndDate,
    });

    // Pegar os dados completos
    const enrollment = await Enrollment.findByPk(enrollmentSave.id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title'],
        },
      ],
    });
    // Enviar e-mail

    await Queue.add(EnrollmentMail.key, {
      enrollment,
    });

    return res.json(enrollment);
  }

  async list(req, res) {
    const enrollment = await Enrollment.findAll({
      order: [['end_date', 'DESC']],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title'],
        },
      ],
    });

    return res.status(200).json(enrollment);
  }

  async details(req, res) {
    const { id } = req.params;

    const enrollment = await Enrollment.findByPk(id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number(),
      plan_id: Yup.number(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;

    let enrollment = await Enrollment.findByPk(id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });

    enrollment = await enrollment.update(req.body);

    return res.status(200).json(enrollment);
  }

  async delete(req, res) {
    const { id } = req.params;

    const enrollmentExists = await Enrollment.findByPk(id);
    if (!enrollmentExists) {
      return res.status(400).json({ error: "That enrollment doesn't exists." });
    }

    await Enrollment.destroy({ where: { id } });
    return res.status(200).json({ message: 'Enrollment deleted.' });
  }
}

export default new EnrollmentController();
