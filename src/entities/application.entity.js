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
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Career } from './career.entity';
import { CareerType } from './career-type.entity';
export var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["PENDING"] = "pending";
    ApplicationStatus["REVIEWING"] = "reviewing";
    ApplicationStatus["ACCEPTED"] = "accepted";
    ApplicationStatus["REJECTED"] = "rejected";
})(ApplicationStatus || (ApplicationStatus = {}));
let Application = (() => {
    let _classDecorators = [Entity('applications')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _firstName_decorators;
    let _firstName_initializers = [];
    let _firstName_extraInitializers = [];
    let _lastName_decorators;
    let _lastName_initializers = [];
    let _lastName_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _phone_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _careerType_decorators;
    let _careerType_initializers = [];
    let _careerType_extraInitializers = [];
    let _careerTypeId_decorators;
    let _careerTypeId_initializers = [];
    let _careerTypeId_extraInitializers = [];
    let _motivation_decorators;
    let _motivation_initializers = [];
    let _motivation_extraInitializers = [];
    let _cvUrl_decorators;
    let _cvUrl_initializers = [];
    let _cvUrl_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _career_decorators;
    let _career_initializers = [];
    let _career_extraInitializers = [];
    let _careerId_decorators;
    let _careerId_initializers = [];
    let _careerId_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    var Application = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [PrimaryGeneratedColumn('uuid')];
            _firstName_decorators = [Column()];
            _lastName_decorators = [Column()];
            _email_decorators = [Column()];
            _phone_decorators = [Column({ nullable: true })];
            _type_decorators = [Column({ type: 'varchar', nullable: true })];
            _careerType_decorators = [ManyToOne(() => CareerType, { nullable: true, onDelete: 'SET NULL' })];
            _careerTypeId_decorators = [Column('varchar', { length: 36, nullable: true })];
            _motivation_decorators = [Column('text', { nullable: true })];
            _cvUrl_decorators = [Column({ type: 'varchar', nullable: true })];
            _status_decorators = [Column({
                    type: 'enum',
                    enum: ApplicationStatus,
                    default: ApplicationStatus.PENDING
                })];
            _career_decorators = [ManyToOne(() => Career, { nullable: true, onDelete: 'SET NULL' })];
            _careerId_decorators = [Column('varchar', { length: 36, nullable: true })];
            _createdAt_decorators = [CreateDateColumn()];
            _updatedAt_decorators = [UpdateDateColumn()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: obj => "firstName" in obj, get: obj => obj.firstName, set: (obj, value) => { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
            __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: obj => "lastName" in obj, get: obj => obj.lastName, set: (obj, value) => { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _lastName_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _careerType_decorators, { kind: "field", name: "careerType", static: false, private: false, access: { has: obj => "careerType" in obj, get: obj => obj.careerType, set: (obj, value) => { obj.careerType = value; } }, metadata: _metadata }, _careerType_initializers, _careerType_extraInitializers);
            __esDecorate(null, null, _careerTypeId_decorators, { kind: "field", name: "careerTypeId", static: false, private: false, access: { has: obj => "careerTypeId" in obj, get: obj => obj.careerTypeId, set: (obj, value) => { obj.careerTypeId = value; } }, metadata: _metadata }, _careerTypeId_initializers, _careerTypeId_extraInitializers);
            __esDecorate(null, null, _motivation_decorators, { kind: "field", name: "motivation", static: false, private: false, access: { has: obj => "motivation" in obj, get: obj => obj.motivation, set: (obj, value) => { obj.motivation = value; } }, metadata: _metadata }, _motivation_initializers, _motivation_extraInitializers);
            __esDecorate(null, null, _cvUrl_decorators, { kind: "field", name: "cvUrl", static: false, private: false, access: { has: obj => "cvUrl" in obj, get: obj => obj.cvUrl, set: (obj, value) => { obj.cvUrl = value; } }, metadata: _metadata }, _cvUrl_initializers, _cvUrl_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _career_decorators, { kind: "field", name: "career", static: false, private: false, access: { has: obj => "career" in obj, get: obj => obj.career, set: (obj, value) => { obj.career = value; } }, metadata: _metadata }, _career_initializers, _career_extraInitializers);
            __esDecorate(null, null, _careerId_decorators, { kind: "field", name: "careerId", static: false, private: false, access: { has: obj => "careerId" in obj, get: obj => obj.careerId, set: (obj, value) => { obj.careerId = value; } }, metadata: _metadata }, _careerId_initializers, _careerId_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Application = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        id = __runInitializers(this, _id_initializers, void 0);
        firstName = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _firstName_initializers, void 0));
        lastName = (__runInitializers(this, _firstName_extraInitializers), __runInitializers(this, _lastName_initializers, void 0));
        email = (__runInitializers(this, _lastName_extraInitializers), __runInitializers(this, _email_initializers, void 0));
        phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
        type = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _type_initializers, void 0));
        careerType = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _careerType_initializers, void 0));
        careerTypeId = (__runInitializers(this, _careerType_extraInitializers), __runInitializers(this, _careerTypeId_initializers, void 0));
        motivation = (__runInitializers(this, _careerTypeId_extraInitializers), __runInitializers(this, _motivation_initializers, void 0));
        cvUrl = (__runInitializers(this, _motivation_extraInitializers), __runInitializers(this, _cvUrl_initializers, void 0));
        status = (__runInitializers(this, _cvUrl_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        career = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _career_initializers, void 0));
        careerId = (__runInitializers(this, _career_extraInitializers), __runInitializers(this, _careerId_initializers, void 0));
        createdAt = (__runInitializers(this, _careerId_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
        updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
        constructor() {
            __runInitializers(this, _updatedAt_extraInitializers);
        }
    };
    return Application = _classThis;
})();
export { Application };
