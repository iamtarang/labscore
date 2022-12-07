module.exports = (app) => {
//Including  the Course Routes

    var authRoute = require('./auth');
    app.use(authRoute);

    var dashboardRoutes = require('./dashboard')
    app.use('/dashboard', dashboardRoutes);

    
    var excelRoutes = require('./excelUpload')
    app.use('/excel', excelRoutes);

    var studentRoutes = require('./studentRoutes')
    app.use('/studentAssignments', studentRoutes);

    //Including  the Course Routes
    var courseRoute = require('./courseRoutes');
    app.use('/courses', courseRoute);

    var usersRoute = require('./userdataRoute');
    app.use('/users', usersRoute);
        
    var registerUser = require('./register');
    app.use('/registerUser', registerUser);

    app.get('/create_assignment', (req, res) => {
        res.render('faculty/create_assignment');
    });

    app.get('/login', (req, res) => {
        res.render('login');
    });

    app.get('/register', (req, res) => {
        res.render('register');
    });

    // app.get('/users_data', (req, res) => {
    //     res.render('users_data');
    // });

    app.get('/faculty_data', (req, res) => {
        res.render('faculty_data');
    });

    
    var assignmentRoutes = require('./assignmentRoutes');
    app.use('/assignments', assignmentRoutes);

    app.get('/assignment_data', (req, res) => {
        res.render('faculty/assignment_data', { title: 'Assignment Data' });
    });

    app.get('/f_index', (req, res) => {
        res.render('faculty_index', { title: 'Faculty Page' });
    });

    // app.get('/download', function(req, res){
    //     const file = `${__dirname}/upload-folder/dramaticpenguin.MOV`;
    //     res.download(file); // Set disposition and send it.
    //   });

      app.get('/uploads/:file', function(req, res){
        const file = __dirname + `/../uploads/${req.params.file}`;
        res.download(file); // Set disposition and send it.
      });
}