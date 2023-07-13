import registerService from "../services/registerService";
let getRegisterPage = (req,res) => {
    return res.render("register.ejs");
};

let createNewUser = async (req,res) => {
    try{
        let data = {
            fullname: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            accountType: req.body.accountType 
            
        };
        // create new user
        await registerService.createNewUser(data);
        return res.status(200).json({
            message: "a user create succeeds"
        })
    }catch (e) {
        console.log(e); // In ra console log để xem thông tin lỗi chi tiết
        return res.status(500).json({
            error: e.message // Gửi phản hồi JSON chứa thông tin lỗi
        });
    }
};
module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
}