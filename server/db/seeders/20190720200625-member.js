'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Members', [{
      name: 'Ukhu',
      teamId: 1,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nero',
      teamId: 1,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bella',
      teamId: 1,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rita',
      teamId: 1,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ovie',
      teamId: 1,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Benjamin',
      teamId: 1,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Maro',
      teamId: 1,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tolu',
      teamId: 2,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pelumie',
      teamId: 2,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Emeka',
      teamId: 2,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Odunayo',
      teamId: 2,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samuel',
      teamId: 2,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ibukun',
      teamId: 2,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jonathan',
      teamId: 2,
      hasLed: false,
      hasQA: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Members', null, {});
  }
};
