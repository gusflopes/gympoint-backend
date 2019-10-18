import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    console.log('Iniciou');
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    // Validar o Schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    // Desestruturacao dos dados da requisicao
    const { email, password } = req.body;

    // Localizar usuario no banco de dados e Validacoes
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username.' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Completar user com as informacoes do database
    // const { id, name } = user;

    return res.status(200).json({ message: 'OK' });
  }
}

export default new SessionController();
