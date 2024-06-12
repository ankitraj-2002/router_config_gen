const db = require('../models');

(async () => {
  try {
    const baseCommand = await db.BaseCommands.findByPk(2);

    if (!baseCommand) {
      console.log('BaseCommand with id 2 not found');
      return;
    }
  const allSystemCommands = await db.systemCommands.findAll();

  await Promise.all(allSystemCommands.map(systemCommands =>{
    systemCommands.LinkId = baseCommand.id;
    return systemCommands.save();
  }));

  console.log('Association complete!');
} catch (error) {
  console.error('Error during association:', error);
}
})();