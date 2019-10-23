import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    // Validate Schema
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    // planExists based on price
    const planExists = await Plan.findOne({
      where: { price: req.body.price },
    });
    if (planExists) {
      return res.status(400).json({
        error: `Plan '${planExists.title}' already uses that price.`,
      });
    }

    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async list(req, res) {
    const plan = await Plan.findAll();

    return res.status(200).json(plan);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const { price } = req.body;

    let plan = await Plan.findByPk(id);

    if (price !== undefined && price !== plan.price) {
      const planExists = await Plan.findOne({
        where: { price },
      });
      if (planExists) {
        return res
          .status(400)
          .json({ error: 'This price is already in use by another Plan.' });
      }
    }

    plan = await plan.update(req.body);

    return res.status(200).json(plan);
  }

  async delete(req, res) {
    const { id } = req.params;

    const planExists = await Plan.findByPk(id);
    if (!planExists) {
      return res.status(400).json({ error: "That plan doesn't exists." });
    }

    await Plan.destroy({ where: { id } });
    return res.status(200).json({ message: 'Plan deleted.' });
  }
}

export default new PlanController();
