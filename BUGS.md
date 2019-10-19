# Version Control

## v 1.0
Feat:
### Students

## Student
Age, weight and height are saved as STRING for now.

### Validation
Every change must be created with a Validation on the Controller

### Fields
#### Age
Must be an integer (for now... probably replace for birth_date later)

#### Weight
Must be a `DECIMAL` with 1 digits. Something like: `type: Sequelize.DECIMAL(10,1)`

### Height
Must be a `DECIMAL` with 2 digits. Something like: `type: Sequelize.DECIMAL(10,1)`
