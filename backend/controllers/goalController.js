// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc    Create goals
// @route   POST /api/goals
// @access  Private
const createGoal = (req,res) => {
    res.status(200).json({ message: 'Set goal' })
}

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Public
const updateGoal = (req, res) => {
    res.status(200).json({ message:`Update goal ${req.params.id}` })
}

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req,res) => {
    res.status(200).json({ message:`Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}