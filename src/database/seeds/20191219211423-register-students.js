module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Gustavo Lopes',
          email: 'eu@gusflopes.com',
          age: 33,
          weight: 90.0,
          height: 1.73,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Francisco Lopes',
          email: 'francisco@gusflopes.com',
          age: 3,
          weight: 18.0,
          height: 0.98,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'João Ferreira',
          email: 'joao@gusflopes.com',
          age: 30,
          weight: '70',
          height: '1.75',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Seu Manoel Musculoso',
          email: 'manoel@gusflopes.com',
          age: 60,
          weight: 120.0,
          height: 1.8,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
