//pulling credentials from injected environment variables
//var dataString = (JSON.parse(process.env.DATA_STR))[0];
module.exports = {
    mlab:{
        db : 'codeblitz',
	    user : 'myUserAdmin',
	    passwd : 'abc123',
    },
    admin_creds:{
        username: 'mtcadmin',
        passwd: 'adminmtc',
    }
}