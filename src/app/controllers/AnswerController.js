import * as Yup from 'yup';
import { Op } from 'sequelize';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class AnswerController {
  async store(req, res) {
    // Validate Schema
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    req.body.answer_at = new Date();

    // Validar studentId
    const helpOrderExists = await HelpOrder.findByPk(id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (!helpOrderExists) {
      return res.status(400).json({ error: "Help Order doesn't exists." });
    }

    const response = await helpOrderExists.update(req.body);

    return res.json(response);
  }

  async list(req, res) {
    if (req.query.history === undefined) {
      const response = await HelpOrder.findAll({
        where: {
          answer: null,
        },
      });

      return res.status(200).json(response);
    }
    const response = await HelpOrder.findAll({
      where: {
        answer: {
          [Op.ne]: null,
        },
      },
    });

    return res.status(200).json(response);
  }
}

export default new AnswerController();
