var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { IsString, IsNotEmpty, IsOptional, IsUrl, IsBoolean, IsNumber, IsEmail, ValidateIf } from 'class-validator';
let CreatePartnerDto = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _categoryId_decorators;
    let _categoryId_initializers = [];
    let _categoryId_extraInitializers = [];
    let _logoUrl_decorators;
    let _logoUrl_initializers = [];
    let _logoUrl_extraInitializers = [];
    let _websiteUrl_decorators;
    let _websiteUrl_initializers = [];
    let _websiteUrl_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _contactName_decorators;
    let _contactName_initializers = [];
    let _contactName_extraInitializers = [];
    let _contactEmail_decorators;
    let _contactEmail_initializers = [];
    let _contactEmail_extraInitializers = [];
    let _contactPhone_decorators;
    let _contactPhone_initializers = [];
    let _contactPhone_extraInitializers = [];
    let _totalFunding_decorators;
    let _totalFunding_initializers = [];
    let _totalFunding_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    return class CreatePartnerDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [IsString(), IsNotEmpty({ message: 'Le nom est requis' })];
            _categoryId_decorators = [IsString(), IsOptional()];
            _logoUrl_decorators = [IsOptional(), IsString()];
            _websiteUrl_decorators = [IsOptional(), ValidateIf(o => o.websiteUrl !== '' && o.websiteUrl !== null && o.websiteUrl !== undefined), IsUrl({}, { message: 'URL du site web invalide (doit commencer par https://)' })];
            _description_decorators = [IsOptional(), IsString()];
            _contactName_decorators = [IsOptional(), IsString()];
            _contactEmail_decorators = [IsOptional(), IsEmail({}, { message: 'Email de contact invalide' })];
            _contactPhone_decorators = [IsOptional(), IsString()];
            _totalFunding_decorators = [IsOptional(), IsNumber({}, { message: 'Le montant du financement doit être un nombre' })];
            _isActive_decorators = [IsOptional(), IsBoolean()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: obj => "categoryId" in obj, get: obj => obj.categoryId, set: (obj, value) => { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
            __esDecorate(null, null, _logoUrl_decorators, { kind: "field", name: "logoUrl", static: false, private: false, access: { has: obj => "logoUrl" in obj, get: obj => obj.logoUrl, set: (obj, value) => { obj.logoUrl = value; } }, metadata: _metadata }, _logoUrl_initializers, _logoUrl_extraInitializers);
            __esDecorate(null, null, _websiteUrl_decorators, { kind: "field", name: "websiteUrl", static: false, private: false, access: { has: obj => "websiteUrl" in obj, get: obj => obj.websiteUrl, set: (obj, value) => { obj.websiteUrl = value; } }, metadata: _metadata }, _websiteUrl_initializers, _websiteUrl_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _contactName_decorators, { kind: "field", name: "contactName", static: false, private: false, access: { has: obj => "contactName" in obj, get: obj => obj.contactName, set: (obj, value) => { obj.contactName = value; } }, metadata: _metadata }, _contactName_initializers, _contactName_extraInitializers);
            __esDecorate(null, null, _contactEmail_decorators, { kind: "field", name: "contactEmail", static: false, private: false, access: { has: obj => "contactEmail" in obj, get: obj => obj.contactEmail, set: (obj, value) => { obj.contactEmail = value; } }, metadata: _metadata }, _contactEmail_initializers, _contactEmail_extraInitializers);
            __esDecorate(null, null, _contactPhone_decorators, { kind: "field", name: "contactPhone", static: false, private: false, access: { has: obj => "contactPhone" in obj, get: obj => obj.contactPhone, set: (obj, value) => { obj.contactPhone = value; } }, metadata: _metadata }, _contactPhone_initializers, _contactPhone_extraInitializers);
            __esDecorate(null, null, _totalFunding_decorators, { kind: "field", name: "totalFunding", static: false, private: false, access: { has: obj => "totalFunding" in obj, get: obj => obj.totalFunding, set: (obj, value) => { obj.totalFunding = value; } }, metadata: _metadata }, _totalFunding_initializers, _totalFunding_extraInitializers);
            __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _name_initializers, void 0);
        categoryId = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
        logoUrl = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _logoUrl_initializers, void 0));
        websiteUrl = (__runInitializers(this, _logoUrl_extraInitializers), __runInitializers(this, _websiteUrl_initializers, void 0));
        description = (__runInitializers(this, _websiteUrl_extraInitializers), __runInitializers(this, _description_initializers, void 0));
        contactName = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _contactName_initializers, void 0));
        contactEmail = (__runInitializers(this, _contactName_extraInitializers), __runInitializers(this, _contactEmail_initializers, void 0));
        contactPhone = (__runInitializers(this, _contactEmail_extraInitializers), __runInitializers(this, _contactPhone_initializers, void 0));
        totalFunding = (__runInitializers(this, _contactPhone_extraInitializers), __runInitializers(this, _totalFunding_initializers, void 0));
        isActive = (__runInitializers(this, _totalFunding_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
        constructor() {
            __runInitializers(this, _isActive_extraInitializers);
        }
    };
})();
export { CreatePartnerDto };
let UpdatePartnerDto = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _categoryId_decorators;
    let _categoryId_initializers = [];
    let _categoryId_extraInitializers = [];
    let _logoUrl_decorators;
    let _logoUrl_initializers = [];
    let _logoUrl_extraInitializers = [];
    let _websiteUrl_decorators;
    let _websiteUrl_initializers = [];
    let _websiteUrl_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _contactName_decorators;
    let _contactName_initializers = [];
    let _contactName_extraInitializers = [];
    let _contactEmail_decorators;
    let _contactEmail_initializers = [];
    let _contactEmail_extraInitializers = [];
    let _contactPhone_decorators;
    let _contactPhone_initializers = [];
    let _contactPhone_extraInitializers = [];
    let _totalFunding_decorators;
    let _totalFunding_initializers = [];
    let _totalFunding_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    return class UpdatePartnerDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [IsOptional(), IsString()];
            _categoryId_decorators = [IsOptional(), IsString()];
            _logoUrl_decorators = [IsOptional(), IsString()];
            _websiteUrl_decorators = [IsOptional(), ValidateIf(o => o.websiteUrl !== '' && o.websiteUrl !== null && o.websiteUrl !== undefined), IsUrl({}, { message: 'URL du site web invalide' })];
            _description_decorators = [IsOptional(), IsString()];
            _contactName_decorators = [IsOptional(), IsString()];
            _contactEmail_decorators = [IsOptional(), IsEmail({}, { message: 'Email de contact invalide' })];
            _contactPhone_decorators = [IsOptional(), IsString()];
            _totalFunding_decorators = [IsOptional(), IsNumber()];
            _isActive_decorators = [IsOptional(), IsBoolean()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: obj => "categoryId" in obj, get: obj => obj.categoryId, set: (obj, value) => { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
            __esDecorate(null, null, _logoUrl_decorators, { kind: "field", name: "logoUrl", static: false, private: false, access: { has: obj => "logoUrl" in obj, get: obj => obj.logoUrl, set: (obj, value) => { obj.logoUrl = value; } }, metadata: _metadata }, _logoUrl_initializers, _logoUrl_extraInitializers);
            __esDecorate(null, null, _websiteUrl_decorators, { kind: "field", name: "websiteUrl", static: false, private: false, access: { has: obj => "websiteUrl" in obj, get: obj => obj.websiteUrl, set: (obj, value) => { obj.websiteUrl = value; } }, metadata: _metadata }, _websiteUrl_initializers, _websiteUrl_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _contactName_decorators, { kind: "field", name: "contactName", static: false, private: false, access: { has: obj => "contactName" in obj, get: obj => obj.contactName, set: (obj, value) => { obj.contactName = value; } }, metadata: _metadata }, _contactName_initializers, _contactName_extraInitializers);
            __esDecorate(null, null, _contactEmail_decorators, { kind: "field", name: "contactEmail", static: false, private: false, access: { has: obj => "contactEmail" in obj, get: obj => obj.contactEmail, set: (obj, value) => { obj.contactEmail = value; } }, metadata: _metadata }, _contactEmail_initializers, _contactEmail_extraInitializers);
            __esDecorate(null, null, _contactPhone_decorators, { kind: "field", name: "contactPhone", static: false, private: false, access: { has: obj => "contactPhone" in obj, get: obj => obj.contactPhone, set: (obj, value) => { obj.contactPhone = value; } }, metadata: _metadata }, _contactPhone_initializers, _contactPhone_extraInitializers);
            __esDecorate(null, null, _totalFunding_decorators, { kind: "field", name: "totalFunding", static: false, private: false, access: { has: obj => "totalFunding" in obj, get: obj => obj.totalFunding, set: (obj, value) => { obj.totalFunding = value; } }, metadata: _metadata }, _totalFunding_initializers, _totalFunding_extraInitializers);
            __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _name_initializers, void 0);
        categoryId = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
        logoUrl = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _logoUrl_initializers, void 0));
        websiteUrl = (__runInitializers(this, _logoUrl_extraInitializers), __runInitializers(this, _websiteUrl_initializers, void 0));
        description = (__runInitializers(this, _websiteUrl_extraInitializers), __runInitializers(this, _description_initializers, void 0));
        contactName = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _contactName_initializers, void 0));
        contactEmail = (__runInitializers(this, _contactName_extraInitializers), __runInitializers(this, _contactEmail_initializers, void 0));
        contactPhone = (__runInitializers(this, _contactEmail_extraInitializers), __runInitializers(this, _contactPhone_initializers, void 0));
        totalFunding = (__runInitializers(this, _contactPhone_extraInitializers), __runInitializers(this, _totalFunding_initializers, void 0));
        isActive = (__runInitializers(this, _totalFunding_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
        constructor() {
            __runInitializers(this, _isActive_extraInitializers);
        }
    };
})();
export { UpdatePartnerDto };
