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
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Department } from './department.entity';
export var MemberStatus;
(function (MemberStatus) {
    MemberStatus["ACTIVE"] = "active";
    MemberStatus["SUSPENDED"] = "suspended";
    MemberStatus["PENDING"] = "pending";
})(MemberStatus || (MemberStatus = {}));
export var MemberAccess;
(function (MemberAccess) {
    MemberAccess["SUPER_ADMIN"] = "super_admin";
    MemberAccess["ADMIN"] = "admin";
    MemberAccess["EDITOR"] = "editor";
    MemberAccess["VIEWER"] = "viewer";
})(MemberAccess || (MemberAccess = {}));
/**
 * @swagger
 * components:
 *   schemas:
 *     TeamMember:
 *       type: object
 *       required:
 *         - name
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         role:
 *           type: string
 *         department:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         access:
 *           type: string
 *           enum: [super_admin, admin, editor, viewer]
 *         status:
 *           type: string
 *           enum: [active, suspended, pending]
 *         photoUrl:
 *           type: string
 *         bio:
 *           type: string
 */
let TeamMember = (() => {
    let _classDecorators = [Entity('team_members')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _role_decorators;
    let _role_initializers = [];
    let _role_extraInitializers = [];
    let _department_decorators;
    let _department_initializers = [];
    let _department_extraInitializers = [];
    let _departmentId_decorators;
    let _departmentId_initializers = [];
    let _departmentId_extraInitializers = [];
    let _departmentRelation_decorators;
    let _departmentRelation_initializers = [];
    let _departmentRelation_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _phone_extraInitializers = [];
    let _access_decorators;
    let _access_initializers = [];
    let _access_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _joinDate_decorators;
    let _joinDate_initializers = [];
    let _joinDate_extraInitializers = [];
    let _avatarInitials_decorators;
    let _avatarInitials_initializers = [];
    let _avatarInitials_extraInitializers = [];
    let _avatarColor_decorators;
    let _avatarColor_initializers = [];
    let _avatarColor_extraInitializers = [];
    let _bio_decorators;
    let _bio_initializers = [];
    let _bio_extraInitializers = [];
    let _photoUrl_decorators;
    let _photoUrl_initializers = [];
    let _photoUrl_extraInitializers = [];
    let _linkedinUrl_decorators;
    let _linkedinUrl_initializers = [];
    let _linkedinUrl_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    let _activityCount_decorators;
    let _activityCount_initializers = [];
    let _activityCount_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    var TeamMember = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [PrimaryGeneratedColumn('uuid')];
            _name_decorators = [Column()];
            _role_decorators = [Column()];
            _department_decorators = [Column({ default: 'Programmes' })];
            _departmentId_decorators = [Column({ nullable: true })];
            _departmentRelation_decorators = [ManyToOne(() => Department, { nullable: true, onDelete: 'SET NULL' }), JoinColumn({ name: 'departmentId' })];
            _email_decorators = [Column({ nullable: true })];
            _phone_decorators = [Column({ nullable: true })];
            _access_decorators = [Column({
                    type: 'enum',
                    enum: MemberAccess,
                    default: MemberAccess.EDITOR
                })];
            _status_decorators = [Column({
                    type: 'enum',
                    enum: MemberStatus,
                    default: MemberStatus.ACTIVE
                })];
            _joinDate_decorators = [Column({ type: 'date', nullable: true })];
            _avatarInitials_decorators = [Column({ nullable: true })];
            _avatarColor_decorators = [Column({ default: 'bg-emerald-600' })];
            _bio_decorators = [Column('text', { nullable: true })];
            _photoUrl_decorators = [Column({ nullable: true })];
            _linkedinUrl_decorators = [Column({ nullable: true })];
            _order_decorators = [Column({ default: 0 })];
            _activityCount_decorators = [Column({ default: 0 })];
            _isActive_decorators = [Column({ default: true })];
            _createdAt_decorators = [CreateDateColumn()];
            _updatedAt_decorators = [UpdateDateColumn()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: obj => "role" in obj, get: obj => obj.role, set: (obj, value) => { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
            __esDecorate(null, null, _department_decorators, { kind: "field", name: "department", static: false, private: false, access: { has: obj => "department" in obj, get: obj => obj.department, set: (obj, value) => { obj.department = value; } }, metadata: _metadata }, _department_initializers, _department_extraInitializers);
            __esDecorate(null, null, _departmentId_decorators, { kind: "field", name: "departmentId", static: false, private: false, access: { has: obj => "departmentId" in obj, get: obj => obj.departmentId, set: (obj, value) => { obj.departmentId = value; } }, metadata: _metadata }, _departmentId_initializers, _departmentId_extraInitializers);
            __esDecorate(null, null, _departmentRelation_decorators, { kind: "field", name: "departmentRelation", static: false, private: false, access: { has: obj => "departmentRelation" in obj, get: obj => obj.departmentRelation, set: (obj, value) => { obj.departmentRelation = value; } }, metadata: _metadata }, _departmentRelation_initializers, _departmentRelation_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _access_decorators, { kind: "field", name: "access", static: false, private: false, access: { has: obj => "access" in obj, get: obj => obj.access, set: (obj, value) => { obj.access = value; } }, metadata: _metadata }, _access_initializers, _access_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _joinDate_decorators, { kind: "field", name: "joinDate", static: false, private: false, access: { has: obj => "joinDate" in obj, get: obj => obj.joinDate, set: (obj, value) => { obj.joinDate = value; } }, metadata: _metadata }, _joinDate_initializers, _joinDate_extraInitializers);
            __esDecorate(null, null, _avatarInitials_decorators, { kind: "field", name: "avatarInitials", static: false, private: false, access: { has: obj => "avatarInitials" in obj, get: obj => obj.avatarInitials, set: (obj, value) => { obj.avatarInitials = value; } }, metadata: _metadata }, _avatarInitials_initializers, _avatarInitials_extraInitializers);
            __esDecorate(null, null, _avatarColor_decorators, { kind: "field", name: "avatarColor", static: false, private: false, access: { has: obj => "avatarColor" in obj, get: obj => obj.avatarColor, set: (obj, value) => { obj.avatarColor = value; } }, metadata: _metadata }, _avatarColor_initializers, _avatarColor_extraInitializers);
            __esDecorate(null, null, _bio_decorators, { kind: "field", name: "bio", static: false, private: false, access: { has: obj => "bio" in obj, get: obj => obj.bio, set: (obj, value) => { obj.bio = value; } }, metadata: _metadata }, _bio_initializers, _bio_extraInitializers);
            __esDecorate(null, null, _photoUrl_decorators, { kind: "field", name: "photoUrl", static: false, private: false, access: { has: obj => "photoUrl" in obj, get: obj => obj.photoUrl, set: (obj, value) => { obj.photoUrl = value; } }, metadata: _metadata }, _photoUrl_initializers, _photoUrl_extraInitializers);
            __esDecorate(null, null, _linkedinUrl_decorators, { kind: "field", name: "linkedinUrl", static: false, private: false, access: { has: obj => "linkedinUrl" in obj, get: obj => obj.linkedinUrl, set: (obj, value) => { obj.linkedinUrl = value; } }, metadata: _metadata }, _linkedinUrl_initializers, _linkedinUrl_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            __esDecorate(null, null, _activityCount_decorators, { kind: "field", name: "activityCount", static: false, private: false, access: { has: obj => "activityCount" in obj, get: obj => obj.activityCount, set: (obj, value) => { obj.activityCount = value; } }, metadata: _metadata }, _activityCount_initializers, _activityCount_extraInitializers);
            __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            TeamMember = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        id = __runInitializers(this, _id_initializers, void 0);
        name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
        role = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _role_initializers, void 0)); // Poste / Rôle
        department = (__runInitializers(this, _role_extraInitializers), __runInitializers(this, _department_initializers, void 0));
        departmentId = (__runInitializers(this, _department_extraInitializers), __runInitializers(this, _departmentId_initializers, void 0));
        departmentRelation = (__runInitializers(this, _departmentId_extraInitializers), __runInitializers(this, _departmentRelation_initializers, void 0));
        email = (__runInitializers(this, _departmentRelation_extraInitializers), __runInitializers(this, _email_initializers, void 0));
        phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
        access = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _access_initializers, void 0));
        status = (__runInitializers(this, _access_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        joinDate = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _joinDate_initializers, void 0));
        avatarInitials = (__runInitializers(this, _joinDate_extraInitializers), __runInitializers(this, _avatarInitials_initializers, void 0));
        avatarColor = (__runInitializers(this, _avatarInitials_extraInitializers), __runInitializers(this, _avatarColor_initializers, void 0));
        bio = (__runInitializers(this, _avatarColor_extraInitializers), __runInitializers(this, _bio_initializers, void 0));
        photoUrl = (__runInitializers(this, _bio_extraInitializers), __runInitializers(this, _photoUrl_initializers, void 0));
        linkedinUrl = (__runInitializers(this, _photoUrl_extraInitializers), __runInitializers(this, _linkedinUrl_initializers, void 0));
        order = (__runInitializers(this, _linkedinUrl_extraInitializers), __runInitializers(this, _order_initializers, void 0));
        activityCount = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _activityCount_initializers, void 0));
        isActive = (__runInitializers(this, _activityCount_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
        createdAt = (__runInitializers(this, _isActive_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
        updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
        constructor() {
            __runInitializers(this, _updatedAt_extraInitializers);
        }
    };
    return TeamMember = _classThis;
})();
export { TeamMember };
