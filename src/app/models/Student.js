import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.STRING,
        weight: Sequelize.STRING,
        height: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Student;
