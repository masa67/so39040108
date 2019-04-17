"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserHelper = /** @class */ (function () {
    function UserHelper() {
    }
    UserHelper.hashPassword = function (password) {
        return password;
    };
    return UserHelper;
}());
var User = /** @class */ (function () {
    function User(login, password) {
        this.login = login || "";
        this.hashedPassword = password ? UserHelper.hashPassword(password) : "";
    }
    return User;
}());
exports.User = User;
