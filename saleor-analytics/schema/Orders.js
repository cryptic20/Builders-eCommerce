cube(`Orders`, {
  sql: `select * from order_order`,

  measures: {
    count: {
      type: `count`
    },

    totalNet: {
      sql: `total_net`,
      type: `sum`,
      format: `currency`
    },

    averageValue: {
      sql: `total_net`,
      type: `avg`,
      format: `currency`
    }
  },

  dimensions: {
    created: {
      sql: `created`,
      type: `time`
    },

    status: {
      sql: `status`,
      type: `string`
    }
  }
});
