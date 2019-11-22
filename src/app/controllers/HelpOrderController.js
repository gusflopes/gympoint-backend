import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async store(req, res) {
    // Validate Schema
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const { question } = req.body;

    // Validar studentId
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(400).json({ error: "Student doesn't exists." });
    }

    const help_order = await HelpOrder.create({
      student_id: id,
      question,
    });

    return res.json({
      help_order,
      student: { student_id: id, student_name: student.name },
    });
  }

  async list(req, res) {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(400).json({ error: "Student doesn't exists." });
    }

    const help_order = await HelpOrder.findAll({
      where: {
        student_id: req.params.id,
      },
      order: [['id', 'DESC']],
    });

    return res.status(200).json({ student: student.name, help_order });
  }
}

export default new HelpOrderController();
