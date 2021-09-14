"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_exceptions_1 = __importDefault(require("./http.exceptions"));
class NotFoundException extends http_exceptions_1.default {
    constructor(message) {
        super(404, message);
    }
}
exports.default = NotFoundException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90Zm91bmQuZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGNlcHRpb25zL25vdGZvdW5kLmV4Y2VwdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3RUFBOEM7QUFFOUMsTUFBTSxpQkFBa0IsU0FBUSx5QkFBYTtJQUN6QyxZQUFZLE9BQWU7UUFDdkIsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyJ9