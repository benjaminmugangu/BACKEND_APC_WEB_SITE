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
import { MessageSubject } from './message-subject.entity';
export var MessageStatus;
(function (MessageStatus) {
    MessageStatus["UNREAD"] = "unread";
    MessageStatus["READ"] = "read";
    MessageStatus["REPLIED"] = "replied";
    MessageStatus["ARCHIVED"] = "archived";
})(MessageStatus || (MessageStatus = {}));
/** @deprecated Remplacé par la relation MessageSubject. Conservé pour rétrocompatibilité. */
export var MessageType;
(function (MessageType) {
    MessageType["CONTACT"] = "contact";
    MessageType["PARTNERSHIP"] = "partnership";
    MessageType["DONATION"] = "donation";
    MessageType["OTHER"] = "other";
})(MessageType || (MessageType = {}));
/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       required:
 *         - sender
 *         - email
 *         - subject
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         sender:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         subject:
 *           type: string
 *         content:
 *           type: string
 *         type:
 *           type: string
 *           enum: [contact, partnership, donation, other]
 *         status:
 *           type: string
 *           enum: [unread, read, replied, archived]
 */
let Message = (() => {
    let _classDecorators = [Entity('messages')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _sender_decorators;
    let _sender_initializers = [];
    let _sender_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _phone_extraInitializers = [];
    let _subject_decorators;
    let _subject_initializers = [];
    let _subject_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _messageSubjectId_decorators;
    let _messageSubjectId_initializers = [];
    let _messageSubjectId_extraInitializers = [];
    let _messageSubject_decorators;
    let _messageSubject_initializers = [];
    let _messageSubject_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _repliedAt_decorators;
    let _repliedAt_initializers = [];
    let _repliedAt_extraInitializers = [];
    let _repliedBy_decorators;
    let _repliedBy_initializers = [];
    let _repliedBy_extraInitializers = [];
    let _replyContent_decorators;
    let _replyContent_initializers = [];
    let _replyContent_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    var Message = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [PrimaryGeneratedColumn('uuid')];
            _sender_decorators = [Column()];
            _email_decorators = [Column()];
            _phone_decorators = [Column({ nullable: true })];
            _subject_decorators = [Column()];
            _content_decorators = [Column('text')];
            _type_decorators = [Column({
                    type: 'enum',
                    enum: MessageType,
                    nullable: true
                })];
            _messageSubjectId_decorators = [Column({ nullable: true })];
            _messageSubject_decorators = [ManyToOne(() => MessageSubject, subject => subject.messages, { nullable: true, eager: true }), JoinColumn({ name: 'messageSubjectId' })];
            _status_decorators = [Column({
                    type: 'enum',
                    enum: MessageStatus,
                    default: MessageStatus.UNREAD
                })];
            _repliedAt_decorators = [Column({ nullable: true })];
            _repliedBy_decorators = [Column({ nullable: true })];
            _replyContent_decorators = [Column('text', { nullable: true })];
            _createdAt_decorators = [CreateDateColumn()];
            _updatedAt_decorators = [UpdateDateColumn()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _sender_decorators, { kind: "field", name: "sender", static: false, private: false, access: { has: obj => "sender" in obj, get: obj => obj.sender, set: (obj, value) => { obj.sender = value; } }, metadata: _metadata }, _sender_initializers, _sender_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _subject_decorators, { kind: "field", name: "subject", static: false, private: false, access: { has: obj => "subject" in obj, get: obj => obj.subject, set: (obj, value) => { obj.subject = value; } }, metadata: _metadata }, _subject_initializers, _subject_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _messageSubjectId_decorators, { kind: "field", name: "messageSubjectId", static: false, private: false, access: { has: obj => "messageSubjectId" in obj, get: obj => obj.messageSubjectId, set: (obj, value) => { obj.messageSubjectId = value; } }, metadata: _metadata }, _messageSubjectId_initializers, _messageSubjectId_extraInitializers);
            __esDecorate(null, null, _messageSubject_decorators, { kind: "field", name: "messageSubject", static: false, private: false, access: { has: obj => "messageSubject" in obj, get: obj => obj.messageSubject, set: (obj, value) => { obj.messageSubject = value; } }, metadata: _metadata }, _messageSubject_initializers, _messageSubject_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _repliedAt_decorators, { kind: "field", name: "repliedAt", static: false, private: false, access: { has: obj => "repliedAt" in obj, get: obj => obj.repliedAt, set: (obj, value) => { obj.repliedAt = value; } }, metadata: _metadata }, _repliedAt_initializers, _repliedAt_extraInitializers);
            __esDecorate(null, null, _repliedBy_decorators, { kind: "field", name: "repliedBy", static: false, private: false, access: { has: obj => "repliedBy" in obj, get: obj => obj.repliedBy, set: (obj, value) => { obj.repliedBy = value; } }, metadata: _metadata }, _repliedBy_initializers, _repliedBy_extraInitializers);
            __esDecorate(null, null, _replyContent_decorators, { kind: "field", name: "replyContent", static: false, private: false, access: { has: obj => "replyContent" in obj, get: obj => obj.replyContent, set: (obj, value) => { obj.replyContent = value; } }, metadata: _metadata }, _replyContent_initializers, _replyContent_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Message = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        id = __runInitializers(this, _id_initializers, void 0);
        sender = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _sender_initializers, void 0)); // Nom de l'expéditeur
        email = (__runInitializers(this, _sender_extraInitializers), __runInitializers(this, _email_initializers, void 0));
        phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
        subject = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _subject_initializers, void 0));
        content = (__runInitializers(this, _subject_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        /** @deprecated Utiliser messageSubjectId à la place */
        type = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _type_initializers, void 0));
        messageSubjectId = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _messageSubjectId_initializers, void 0));
        messageSubject = (__runInitializers(this, _messageSubjectId_extraInitializers), __runInitializers(this, _messageSubject_initializers, void 0));
        status = (__runInitializers(this, _messageSubject_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        repliedAt = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _repliedAt_initializers, void 0));
        repliedBy = (__runInitializers(this, _repliedAt_extraInitializers), __runInitializers(this, _repliedBy_initializers, void 0)); // ID de l'admin ayant répondu
        replyContent = (__runInitializers(this, _repliedBy_extraInitializers), __runInitializers(this, _replyContent_initializers, void 0));
        createdAt = (__runInitializers(this, _replyContent_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
        updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
        constructor() {
            __runInitializers(this, _updatedAt_extraInitializers);
        }
    };
    return Message = _classThis;
})();
export { Message };
