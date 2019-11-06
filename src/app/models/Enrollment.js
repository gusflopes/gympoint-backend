import Sequelize, { Model, DataTypes } from 'sequelize';
import {} from 'date-fns';

class Enrollment extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        plan_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.FLOAT,
        active: {
          type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN, [
            'end_date',
            'start_date',
          ]),
          get() {
            const today = new Date();
            if (
              today <= this.get('end_date') &&
              today >= this.get('start_date')
            ) {
              return true;
            }
            return false;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
  }
}

export default Enrollment;
