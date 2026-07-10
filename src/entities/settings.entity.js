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
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';
/**
 * @swagger
 * components:
 *   schemas:
 *     Settings:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         hero:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             subtitle:
 *               type: string
 *             imageUrl:
 *               type: string
 *         stats:
 *           type: object
 *           properties:
 *             beneficiaries:
 *               type: string
 *             projects:
 *               type: string
 *             provinces:
 *               type: string
 *             partners:
 *               type: string
 *             teamMembers:
 *               type: string
 *         contact:
 *           type: object
 *           properties:
 *             address:
 *               type: string
 *             phone1:
 *               type: string
 *             phone2:
 *               type: string
 *             whatsapp:
 *               type: string
 *             email:
 *               type: string
 *             emailSupport:
 *               type: string
 *             emailCareers:
 *               type: string
 *             socials:
 *               type: object
 *               properties:
 *                 facebook:
 *                   type: string
 *                 twitter:
 *                   type: string
 *                 linkedin:
 *                   type: string
 *                 instagram:
 *                   type: string
 *                 youtube:
 *                   type: string
 *         institution:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             acronym:
 *               type: string
 *             foundationYear:
 *               type: string
 *             vision:
 *               type: string
 *             mission:
 *               type: string
 *         seo:
 *           type: object
 *           properties:
 *             metaTitle:
 *               type: string
 *             metaDescription:
 *               type: string
 *             metaKeywords:
 *               type: string
 *             ogImage:
 *               type: string
 *         logo:
 *           type: object
 *           properties:
 *             logoHeader:
 *               type: string
 *             logoFooter:
 *               type: string
 *             logoDark:
 *               type: string
 *             favicon:
 *               type: string
 *         supportSection:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             subtitle:
 *               type: string
 *             description:
 *               type: string
 *             imageUrl:
 *               type: string
 *             bulletPoints:
 *               type: array
 *               items:
 *                 type: string
 *         historySection:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             subtitle:
 *               type: string
 *             paragraphs:
 *               type: array
 *               items:
 *                 type: string
 *             imageUrl:
 *               type: string
 *             objectives:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   label:
 *                     type: string
 *                   icon:
 *                     type: string
 *                   color:
 *                     type: string
 *                   bg:
 *                     type: string
 *         engagementSection:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             subtitle:
 *               type: string
 *             engagementTypes:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   icon:
 *                     type: string
 *                   color:
 *                     type: string
 *                   bg:
 *                     type: string
 *             reasonsTitle:
 *               type: string
 *             reasons:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *         donationMessage:
 *           type: string
 *         transparencyMessage:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 */
let Settings = (() => {
    let _classDecorators = [Entity('settings')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _hero_decorators;
    let _hero_initializers = [];
    let _hero_extraInitializers = [];
    let _stats_decorators;
    let _stats_initializers = [];
    let _stats_extraInitializers = [];
    let _contact_decorators;
    let _contact_initializers = [];
    let _contact_extraInitializers = [];
    let _institution_decorators;
    let _institution_initializers = [];
    let _institution_extraInitializers = [];
    let _seo_decorators;
    let _seo_initializers = [];
    let _seo_extraInitializers = [];
    let _logo_decorators;
    let _logo_initializers = [];
    let _logo_extraInitializers = [];
    let _supportSection_decorators;
    let _supportSection_initializers = [];
    let _supportSection_extraInitializers = [];
    let _historySection_decorators;
    let _historySection_initializers = [];
    let _historySection_extraInitializers = [];
    let _engagementSection_decorators;
    let _engagementSection_initializers = [];
    let _engagementSection_extraInitializers = [];
    let _donationMessage_decorators;
    let _donationMessage_initializers = [];
    let _donationMessage_extraInitializers = [];
    let _transparencyMessage_decorators;
    let _transparencyMessage_initializers = [];
    let _transparencyMessage_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    var Settings = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [PrimaryGeneratedColumn()];
            _hero_decorators = [Column('json', { nullable: true })];
            _stats_decorators = [Column('json', { nullable: true })];
            _contact_decorators = [Column('json', { nullable: true })];
            _institution_decorators = [Column('json', { nullable: true })];
            _seo_decorators = [Column('json', { nullable: true })];
            _logo_decorators = [Column('json', { nullable: true })];
            _supportSection_decorators = [Column('simple-json', { nullable: true })];
            _historySection_decorators = [Column('simple-json', { nullable: true })];
            _engagementSection_decorators = [Column('simple-json', { nullable: true })];
            _donationMessage_decorators = [Column('text', { nullable: true })];
            _transparencyMessage_decorators = [Column('simple-json', { nullable: true })];
            _updatedAt_decorators = [UpdateDateColumn()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _hero_decorators, { kind: "field", name: "hero", static: false, private: false, access: { has: obj => "hero" in obj, get: obj => obj.hero, set: (obj, value) => { obj.hero = value; } }, metadata: _metadata }, _hero_initializers, _hero_extraInitializers);
            __esDecorate(null, null, _stats_decorators, { kind: "field", name: "stats", static: false, private: false, access: { has: obj => "stats" in obj, get: obj => obj.stats, set: (obj, value) => { obj.stats = value; } }, metadata: _metadata }, _stats_initializers, _stats_extraInitializers);
            __esDecorate(null, null, _contact_decorators, { kind: "field", name: "contact", static: false, private: false, access: { has: obj => "contact" in obj, get: obj => obj.contact, set: (obj, value) => { obj.contact = value; } }, metadata: _metadata }, _contact_initializers, _contact_extraInitializers);
            __esDecorate(null, null, _institution_decorators, { kind: "field", name: "institution", static: false, private: false, access: { has: obj => "institution" in obj, get: obj => obj.institution, set: (obj, value) => { obj.institution = value; } }, metadata: _metadata }, _institution_initializers, _institution_extraInitializers);
            __esDecorate(null, null, _seo_decorators, { kind: "field", name: "seo", static: false, private: false, access: { has: obj => "seo" in obj, get: obj => obj.seo, set: (obj, value) => { obj.seo = value; } }, metadata: _metadata }, _seo_initializers, _seo_extraInitializers);
            __esDecorate(null, null, _logo_decorators, { kind: "field", name: "logo", static: false, private: false, access: { has: obj => "logo" in obj, get: obj => obj.logo, set: (obj, value) => { obj.logo = value; } }, metadata: _metadata }, _logo_initializers, _logo_extraInitializers);
            __esDecorate(null, null, _supportSection_decorators, { kind: "field", name: "supportSection", static: false, private: false, access: { has: obj => "supportSection" in obj, get: obj => obj.supportSection, set: (obj, value) => { obj.supportSection = value; } }, metadata: _metadata }, _supportSection_initializers, _supportSection_extraInitializers);
            __esDecorate(null, null, _historySection_decorators, { kind: "field", name: "historySection", static: false, private: false, access: { has: obj => "historySection" in obj, get: obj => obj.historySection, set: (obj, value) => { obj.historySection = value; } }, metadata: _metadata }, _historySection_initializers, _historySection_extraInitializers);
            __esDecorate(null, null, _engagementSection_decorators, { kind: "field", name: "engagementSection", static: false, private: false, access: { has: obj => "engagementSection" in obj, get: obj => obj.engagementSection, set: (obj, value) => { obj.engagementSection = value; } }, metadata: _metadata }, _engagementSection_initializers, _engagementSection_extraInitializers);
            __esDecorate(null, null, _donationMessage_decorators, { kind: "field", name: "donationMessage", static: false, private: false, access: { has: obj => "donationMessage" in obj, get: obj => obj.donationMessage, set: (obj, value) => { obj.donationMessage = value; } }, metadata: _metadata }, _donationMessage_initializers, _donationMessage_extraInitializers);
            __esDecorate(null, null, _transparencyMessage_decorators, { kind: "field", name: "transparencyMessage", static: false, private: false, access: { has: obj => "transparencyMessage" in obj, get: obj => obj.transparencyMessage, set: (obj, value) => { obj.transparencyMessage = value; } }, metadata: _metadata }, _transparencyMessage_initializers, _transparencyMessage_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Settings = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        id = __runInitializers(this, _id_initializers, void 0);
        hero = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _hero_initializers, void 0));
        stats = (__runInitializers(this, _hero_extraInitializers), __runInitializers(this, _stats_initializers, void 0));
        contact = (__runInitializers(this, _stats_extraInitializers), __runInitializers(this, _contact_initializers, void 0));
        institution = (__runInitializers(this, _contact_extraInitializers), __runInitializers(this, _institution_initializers, void 0));
        seo = (__runInitializers(this, _institution_extraInitializers), __runInitializers(this, _seo_initializers, void 0));
        logo = (__runInitializers(this, _seo_extraInitializers), __runInitializers(this, _logo_initializers, void 0));
        supportSection = (__runInitializers(this, _logo_extraInitializers), __runInitializers(this, _supportSection_initializers, void 0));
        historySection = (__runInitializers(this, _supportSection_extraInitializers), __runInitializers(this, _historySection_initializers, void 0));
        engagementSection = (__runInitializers(this, _historySection_extraInitializers), __runInitializers(this, _engagementSection_initializers, void 0));
        donationMessage = (__runInitializers(this, _engagementSection_extraInitializers), __runInitializers(this, _donationMessage_initializers, void 0));
        transparencyMessage = (__runInitializers(this, _donationMessage_extraInitializers), __runInitializers(this, _transparencyMessage_initializers, void 0));
        updatedAt = (__runInitializers(this, _transparencyMessage_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
        constructor() {
            __runInitializers(this, _updatedAt_extraInitializers);
        }
    };
    return Settings = _classThis;
})();
export { Settings };
