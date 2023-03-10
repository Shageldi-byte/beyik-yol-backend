"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantController = void 0;
const common_1 = require("@nestjs/common");
const constant_service_1 = require("./constant.service");
const create_constant_dto_1 = require("./dto/create-constant.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const client_1 = require("@prisma/client");
let ConstantController = class ConstantController {
    constructor(constantService) {
        this.constantService = constantService;
    }
    create(createConstantDto) {
        return this.constantService.create(createConstantDto);
    }
    findAll() {
        return this.constantService.findAll();
    }
    findByType(type) {
        return this.constantService.findByType(type);
    }
    update(id, updateConstantDto) {
        return this.constantService.update(+id, updateConstantDto);
    }
    remove(id) {
        return this.constantService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('create-constant'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_constant_dto_1.CreateConstantDto]),
    __metadata("design:returntype", void 0)
], ConstantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-all-constants'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConstantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-constant-by-type?'),
    __param(0, (0, common_1.Query)("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConstantController.prototype, "findByType", null);
__decorate([
    (0, common_1.Patch)('update-constant/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_constant_dto_1.CreateConstantDto]),
    __metadata("design:returntype", void 0)
], ConstantController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete-constant/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConstantController.prototype, "remove", null);
ConstantController = __decorate([
    (0, common_1.Controller)('constant'),
    __metadata("design:paramtypes", [constant_service_1.ConstantService])
], ConstantController);
exports.ConstantController = ConstantController;
//# sourceMappingURL=constant.controller.js.map