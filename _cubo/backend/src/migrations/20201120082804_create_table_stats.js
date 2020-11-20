
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stats', table => {
        table.increments('id');
        table.string('lastName').notNull();
        table.float('participation').notNull();
        table.integer('userId').references('id')
            .inTable('users').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('stats');
};
