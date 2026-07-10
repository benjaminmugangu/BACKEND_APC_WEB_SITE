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
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsEnum, IsUUID } from 'class-validator';
import { CareerStatus } from '@/entities/career.entity';
let CreateCareerDto = (() => {
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _requirements_decorators;
    let _requirements_initializers = [];
    let _requirements_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _careerTypeId_decorators;
    let _careerTypeId_initializers = [];
    let _careerTypeId_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _location_decorators;
    let _location_initializers = [];
    let _location_extraInitializers = [];
    let _deadline_decorators;
    let _deadline_initializers = [];
    let _deadline_extraInitializers = [];
    let _isOpen_decorators;
    let _isOpen_initializers = [];
    let _isOpen_extraInitializers = [];
    return class CreateCareerDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [IsString(), IsNotEmpty({ message: 'Le titre est requis' })];
            _description_decorators = [IsString(), IsNotEmpty({ message: 'La description est requise' })];
            _content_decorators = [IsOptional(), IsString()];
            _requirements_decorators = [IsOptional(), IsString()];
            _type_decorators = [IsOptional(), IsString()];
            _careerTypeId_decorators = [IsOptional(), IsUUID('4', { message: 'ID du type de contrat invalide' })];
            _status_decorators = [IsOptional(), IsEnum(CareerStatus, { message: 'Statut invalide' })];
            _location_decorators = [IsOptional(), IsString()];
            _deadline_decorators = [IsOptional(), IsDateString()];
            _isOpen_decorators = [IsOptional(), IsBoolean()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _requirements_decorators, { kind: "field", name: "requirements", static: false, private: false, access: { has: obj => "requirements" in obj, get: obj => obj.requirements, set: (obj, value) => { obj.requirements = value; } }, metadata: _metadata }, _requirements_initializers, _requirements_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _careerTypeId_decorators, { kind: "field", name: "careerTypeId", static: false, private: false, access: { has: obj => "careerTypeId" in obj, get: obj => obj.careerTypeId, set: (obj, value) => { obj.careerTypeId = value; } }, metadata: _metadata }, _careerTypeId_initializers, _careerTypeId_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: obj => "location" in obj, get: obj => obj.location, set: (obj, value) => { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _deadline_decorators, { kind: "field", name: "deadline", static: false, private: false, access: { has: obj => "deadline" in obj, get: obj => obj.deadline, set: (obj, value) => { obj.deadline = value; } }, metadata: _metadata }, _deadline_initializers, _deadline_extraInitializers);
            __esDecorate(null, null, _isOpen_decorators, { kind: "field", name: "isOpen", static: false, private: false, access: { has: obj => "isOpen" in obj, get: obj => obj.isOpen, set: (obj, value) => { obj.isOpen = value; } }, metadata: _metadata }, _isOpen_initializers, _isOpen_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        title = __runInitializers(this, _title_initializers, void 0);
        description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
        content = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        requirements = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _requirements_initializers, void 0));
        type = (__runInitializers(this, _requirements_extraInitializers), __runInitializers(this, _type_initializers, void 0));
        careerTypeId = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _careerTypeId_initializers, void 0));
        status = (__runInitializers(this, _careerTypeId_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        location = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _location_initializers, void 0));
        deadline = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _deadline_initializers, void 0));
        isOpen = (__runInitializers(this, _deadline_extraInitializers), __runInitializers(this, _isOpen_initializers, void 0));
        constructor() {
            __runInitializers(this, _isOpen_extraInitializers);
        }
    };
})();
export { CreateCareerDto };
let UpdateCareerDto = (() => {
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _requirements_decorators;
    let _requirements_initializers = [];
    let _requirements_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _careerTypeId_decorators;
    let _careerTypeId_initializers = [];
    let _careerTypeId_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _location_decorators;
    let _location_initializers = [];
    let _location_extraInitializers = [];
    let _deadline_decorators;
    let _deadline_initializers = [];
    let _deadline_extraInitializers = [];
    let _isOpen_decorators;
    let _isOpen_initializers = [];
    let _isOpen_extraInitializers = [];
    return class UpdateCareerDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [IsOptional(), IsString()];
            _description_decorators = [IsOptional(), IsString()];
            _content_decorators = [IsOptional(), IsString()];
            _requirements_decorators = [IsOptional(), IsString()];
            _type_decorators = [IsOptional(), IsString()];
            _careerTypeId_decorators = [IsOptional(), IsUUID()];
            _status_decorators = [IsOptional(), IsEnum(CareerStatus)];
            _location_decorators = [IsOptional(), IsString()];
            _deadline_decorators = [IsOptional(), IsDateString()];
            _isOpen_decorators = [IsOptional(), IsBoolean()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _requirements_decorators, { kind: "field", name: "requirements", static: false, private: false, access: { has: obj => "requirements" in obj, get: obj => obj.requirements, set: (obj, value) => { obj.requirements = value; } }, metadata: _metadata }, _requirements_initializers, _requirements_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _careerTypeId_decorators, { kind: "field", name: "careerTypeId", static: false, private: false, access: { has: obj => "careerTypeId" in obj, get: obj => obj.careerTypeId, set: (obj, value) => { obj.careerTypeId = value; } }, metadata: _metadata }, _careerTypeId_initializers, _careerTypeId_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: obj => "location" in obj, get: obj => obj.location, set: (obj, value) => { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _deadline_decorators, { kind: "field", name: "deadline", static: false, private: false, access: { has: obj => "deadline" in obj, get: obj => obj.deadline, set: (obj, value) => { obj.deadline = value; } }, metadata: _metadata }, _deadline_initializers, _deadline_extraInitializers);
            __esDecorate(null, null, _isOpen_decorators, { kind: "field", name: "isOpen", static: false, private: false, access: { has: obj => "isOpen" in obj, get: obj => obj.isOpen, set: (obj, value) => { obj.isOpen = value; } }, metadata: _metadata }, _isOpen_initializers, _isOpen_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        title = __runInitializers(this, _title_initializers, void 0);
        description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
        content = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        requirements = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _requirements_initializers, void 0));
        type = (__runInitializers(this, _requirements_extraInitializers), __runInitializers(this, _type_initializers, void 0));
        careerTypeId = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _careerTypeId_initializers, void 0));
        status = (__runInitializers(this, _careerTypeId_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        location = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _location_initializers, void 0));
        deadline = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _deadline_initializers, void 0));
        isOpen = (__runInitializers(this, _deadline_extraInitializers), __runInitializers(this, _isOpen_initializers, void 0));
        constructor() {
            __runInitializers(this, _isOpen_extraInitializers);
        }
    };
})();
export { UpdateCareerDto };
