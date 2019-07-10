var mongoose = require('mongoose');
// var AutoIncrement = require('mongoose-sequence')(mongoose);

var CalculatorSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  updated_at: { type: Date, default: Date.now },
});

// CalculatorSchema.plugin(AutoIncrement, { inc_field: 'order' });

var calculator = module.exports = mongoose.model('Calculator', CalculatorSchema);
