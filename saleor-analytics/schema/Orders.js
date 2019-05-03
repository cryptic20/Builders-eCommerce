cube(`Orders`, {
  sql: `select * from order_order`,

  measures: {
    count: {
      type: `count`
    }
  },

  dimensions: {
    created: {
      type: `time`,
      sql: `created`
    }
  }
  });
