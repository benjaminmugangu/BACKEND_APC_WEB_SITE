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
import { Tender } from './tender.entity';
export var SubmissionStatus;
(function (SubmissionStatus) {
    SubmissionStatus["PENDING"] = "pending";
    SubmissionStatus["REVIEWING"] = "reviewing";
    SubmissionStatus["SELECTED"] = "selected";
    SubmissionStatus["REJECTED"] = "rejected";
})(SubmissionStatus || (SubmissionStatus = {}));
let TenderSubmission = (() => {
    let _classDecorators = [Entity('tender_submissions')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _companyName_decorators;
    let _companyName_initializers = [];
    let _companyName_extraInitializers = [];
    let _contactName_decorators;
    let _contactName_initializers = [];
    let _contactName_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _phone_extraInitializers = [];
    let _address_decorators;
    let _address_initializers = [];
    let _address_extraInitializers = [];
    let _technicalOfferUrl_decorators;
    let _technicalOfferUrl_initializers = [];
    let _technicalOfferUrl_extraInitializers = [];
    let _financialOfferUrl_decorators;
    let _financialOfferUrl_initializers = [];
    let _financialOfferUrl_extraInitializers = [];
    let _adminDocUrl_decorators;
    let _adminDocUrl_initializers = [];
    let _adminDocUrl_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _tender_decorators;
    let _tender_initializers = [];
    let _tender_extraInitializers = [];
    let _tenderId_decorators;
    let _tenderId_initializers = [];
    let _tenderId_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    var TenderSubmission = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [PrimaryGeneratedColumn('uuid')];
            _companyName_decorators = [Column()];
            _contactName_decorators = [Column()];
            _email_decorators = [Column()];
            _phone_decorators = [Column()];
            _address_decorators = [Column({ nullable: true })];
            _technicalOfferUrl_decorators = [Column({ nullable: true })];
            _financialOfferUrl_decorators = [Column({ nullable: true })];
            _adminDocUrl_decorators = [Column({ nullable: true })];
            _status_decorators = [Column({
                    type: 'enum',
                    enum: SubmissionStatus,
                    default: SubmissionStatus.PENDING
                })];
            _tender_decorators = [ManyToOne(() => Tender, { onDelete: 'CASCADE' })];
            _tenderId_decorators = [Column()];
            _createdAt_decorators = [CreateDateColumn()];
            _updatedAt_decorators = [UpdateDateColumn()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _companyName_decorators, { kind: "field", name: "companyName", static: false, private: false, access: { has: obj => "companyName" in obj, get: obj => obj.companyName, set: (obj, value) => { obj.companyName = value; } }, metadata: _metadata }, _companyName_initializers, _companyName_extraInitializers);
            __esDecorate(null, null, _contactName_decorators, { kind: "field", name: "contactName", static: false, private: false, access: { has: obj => "contactName" in obj, get: obj => obj.contactName, set: (obj, value) => { obj.contactName = value; } }, metadata: _metadata }, _contactName_initializers, _contactName_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: obj => "address" in obj, get: obj => obj.address, set: (obj, value) => { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
            __esDecorate(null, null, _technicalOfferUrl_decorators, { kind: "field", name: "technicalOfferUrl", static: false, private: false, access: { has: obj => "technicalOfferUrl" in obj, get: obj => obj.technicalOfferUrl, set: (obj, value) => { obj.technicalOfferUrl = value; } }, metadata: _metadata }, _technicalOfferUrl_initializers, _technicalOfferUrl_extraInitializers);
            __esDecorate(null, null, _financialOfferUrl_decorators, { kind: "field", name: "financialOfferUrl", static: false, private: false, access: { has: obj => "financialOfferUrl" in obj, get: obj => obj.financialOfferUrl, set: (obj, value) => { obj.financialOfferUrl = value; } }, metadata: _metadata }, _financialOfferUrl_initializers, _financialOfferUrl_extraInitializers);
            __esDecorate(null, null, _adminDocUrl_decorators, { kind: "field", name: "adminDocUrl", static: false, private: false, access: { has: obj => "adminDocUrl" in obj, get: obj => obj.adminDocUrl, set: (obj, value) => { obj.adminDocUrl = value; } }, metadata: _metadata }, _adminDocUrl_initializers, _adminDocUrl_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _tender_decorators, { kind: "field", name: "tender", static: false, private: false, access: { has: obj => "tender" in obj, get: obj => obj.tender, set: (obj, value) => { obj.tender = value; } }, metadata: _metadata }, _tender_initializers, _tender_extraInitializers);
            __esDecorate(null, null, _tenderId_decorators, { kind: "field", name: "tenderId", static: false, private: false, access: { has: obj => "tenderId" in obj, get: obj => obj.tenderId, set: (obj, value) => { obj.tenderId = value; } }, metadata: _metadata }, _tenderId_initializers, _tenderId_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            TenderSubmission = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        id = __runInitializers(this, _id_initializers, void 0);
        companyName = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _companyName_initializers, void 0));
        contactName = (__runInitializers(this, _companyName_extraInitializers), __runInitializers(this, _contactName_initializers, void 0));
        email = (__runInitializers(this, _contactName_extraInitializers), __runInitializers(this, _email_initializers, void 0));
        phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
        address = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _address_initializers, void 0));
        technicalOfferUrl = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _technicalOfferUrl_initializers, void 0));
        financialOfferUrl = (__runInitializers(this, _technicalOfferUrl_extraInitializers), __runInitializers(this, _financialOfferUrl_initializers, void 0));
        adminDocUrl = (__runInitializers(this, _financialOfferUrl_extraInitializers), __runInitializers(this, _adminDocUrl_initializers, void 0));
        status = (__runInitializers(this, _adminDocUrl_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        tender = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _tender_initializers, void 0));
        tenderId = (__runInitializers(this, _tender_extraInitializers), __runInitializers(this, _tenderId_initializers, void 0));
        createdAt = (__runInitializers(this, _tenderId_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
        updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
        constructor() {
            __runInitializers(this, _updatedAt_extraInitializers);
        }
    };
    return TenderSubmission = _classThis;
})();
export { TenderSubmission };
