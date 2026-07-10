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
import { ProjectCategory } from './project-category.entity';
export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["DRAFT"] = "draft";
    ProjectStatus["PUBLISHED"] = "published";
    ProjectStatus["ARCHIVED"] = "archived";
})(ProjectStatus || (ProjectStatus = {}));
/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - title
 *         - slug
 *         - description
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           readOnly: true
 *           example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *         title:
 *           type: string
 *           example: "Soutien à l'Agriculture Durable à Rutshuru"
 *         slug:
 *           type: string
 *           example: "soutien-agriculture-durable-rutshuru"
 *         description:
 *           type: string
 *           example: "Court résumé du projet pour les listes et aperçus."
 *         content:
 *           type: string
 *           nullable: true
 *           example: "<p>Contenu détaillé HTML du projet...</p>"
 *         categoryId:
 *           type: string
 *           format: uuid
 *         category:
 *           $ref: '#/components/schemas/ProjectCategory'
 *         status:
 *           type: string
 *           enum: [draft, published, archived]
 *           default: draft
 *           example: "published"
 *         budget:
 *           type: number
 *           format: decimal
 *           example: 350000
 *         currency:
 *           type: string
 *           default: USD
 *           example: "USD"
 *         location:
 *           type: string
 *           nullable: true
 *           example: "Rutshuru, Nord-Kivu"
 *         province:
 *           type: string
 *           nullable: true
 *           example: "Nord-Kivu"
 *         beneficiaries:
 *           type: integer
 *           example: 2500
 *         startDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2024-01-15"
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2025-12-31"
 *         mainImage:
 *           type: string
 *           nullable: true
 *           example: "https://res.cloudinary.com/apc/image/upload/v1/projects/rutshuru.jpg"
 *         gallery:
 *           type: array
 *           items:
 *             type: string
 *           nullable: true
 *           example: ["https://res.cloudinary.com/apc/image/upload/photo1.jpg"]
 *         featured:
 *           type: boolean
 *           default: false
 *           example: true
 *         showOnHome:
 *           type: boolean
 *           default: true
 *           example: true
 *         needsDonation:
 *           type: boolean
 *           default: false
 *           example: false
 *         isVisible:
 *           type: boolean
 *           default: true
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */
let Project = (() => {
    let _classDecorators = [Entity('projects')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _slug_decorators;
    let _slug_initializers = [];
    let _slug_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _category_decorators;
    let _category_initializers = [];
    let _category_extraInitializers = [];
    let _categoryId_decorators;
    let _categoryId_initializers = [];
    let _categoryId_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _budget_decorators;
    let _budget_initializers = [];
    let _budget_extraInitializers = [];
    let _currency_decorators;
    let _currency_initializers = [];
    let _currency_extraInitializers = [];
    let _location_decorators;
    let _location_initializers = [];
    let _location_extraInitializers = [];
    let _province_decorators;
    let _province_initializers = [];
    let _province_extraInitializers = [];
    let _beneficiaries_decorators;
    let _beneficiaries_initializers = [];
    let _beneficiaries_extraInitializers = [];
    let _startDate_decorators;
    let _startDate_initializers = [];
    let _startDate_extraInitializers = [];
    let _endDate_decorators;
    let _endDate_initializers = [];
    let _endDate_extraInitializers = [];
    let _mainImage_decorators;
    let _mainImage_initializers = [];
    let _mainImage_extraInitializers = [];
    let _gallery_decorators;
    let _gallery_initializers = [];
    let _gallery_extraInitializers = [];
    let _featured_decorators;
    let _featured_initializers = [];
    let _featured_extraInitializers = [];
    let _showOnHome_decorators;
    let _showOnHome_initializers = [];
    let _showOnHome_extraInitializers = [];
    let _needsDonation_decorators;
    let _needsDonation_initializers = [];
    let _needsDonation_extraInitializers = [];
    let _isVisible_decorators;
    let _isVisible_initializers = [];
    let _isVisible_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    var Project = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [PrimaryGeneratedColumn('uuid')];
            _title_decorators = [Column()];
            _slug_decorators = [Column({ unique: true })];
            _description_decorators = [Column('text')];
            _content_decorators = [Column('text', { nullable: true })];
            _category_decorators = [ManyToOne(() => ProjectCategory, category => category.projects, { nullable: true, onDelete: 'SET NULL' })];
            _categoryId_decorators = [Column({ nullable: true })];
            _status_decorators = [Column({
                    type: 'enum',
                    enum: ProjectStatus,
                    default: ProjectStatus.DRAFT,
                })];
            _budget_decorators = [Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })];
            _currency_decorators = [Column({ default: 'USD' })];
            _location_decorators = [Column({ nullable: true })];
            _province_decorators = [Column({ nullable: true })];
            _beneficiaries_decorators = [Column({ default: 0 })];
            _startDate_decorators = [Column({ type: 'date', nullable: true })];
            _endDate_decorators = [Column({ type: 'date', nullable: true })];
            _mainImage_decorators = [Column({ nullable: true })];
            _gallery_decorators = [Column('simple-array', { nullable: true })];
            _featured_decorators = [Column({ default: false })];
            _showOnHome_decorators = [Column({ default: true })];
            _needsDonation_decorators = [Column({ default: false })];
            _isVisible_decorators = [Column({ default: true })];
            _createdAt_decorators = [CreateDateColumn()];
            _updatedAt_decorators = [UpdateDateColumn()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: obj => "slug" in obj, get: obj => obj.slug, set: (obj, value) => { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: obj => "category" in obj, get: obj => obj.category, set: (obj, value) => { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
            __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: obj => "categoryId" in obj, get: obj => obj.categoryId, set: (obj, value) => { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _budget_decorators, { kind: "field", name: "budget", static: false, private: false, access: { has: obj => "budget" in obj, get: obj => obj.budget, set: (obj, value) => { obj.budget = value; } }, metadata: _metadata }, _budget_initializers, _budget_extraInitializers);
            __esDecorate(null, null, _currency_decorators, { kind: "field", name: "currency", static: false, private: false, access: { has: obj => "currency" in obj, get: obj => obj.currency, set: (obj, value) => { obj.currency = value; } }, metadata: _metadata }, _currency_initializers, _currency_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: obj => "location" in obj, get: obj => obj.location, set: (obj, value) => { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _province_decorators, { kind: "field", name: "province", static: false, private: false, access: { has: obj => "province" in obj, get: obj => obj.province, set: (obj, value) => { obj.province = value; } }, metadata: _metadata }, _province_initializers, _province_extraInitializers);
            __esDecorate(null, null, _beneficiaries_decorators, { kind: "field", name: "beneficiaries", static: false, private: false, access: { has: obj => "beneficiaries" in obj, get: obj => obj.beneficiaries, set: (obj, value) => { obj.beneficiaries = value; } }, metadata: _metadata }, _beneficiaries_initializers, _beneficiaries_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: obj => "startDate" in obj, get: obj => obj.startDate, set: (obj, value) => { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: obj => "endDate" in obj, get: obj => obj.endDate, set: (obj, value) => { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _mainImage_decorators, { kind: "field", name: "mainImage", static: false, private: false, access: { has: obj => "mainImage" in obj, get: obj => obj.mainImage, set: (obj, value) => { obj.mainImage = value; } }, metadata: _metadata }, _mainImage_initializers, _mainImage_extraInitializers);
            __esDecorate(null, null, _gallery_decorators, { kind: "field", name: "gallery", static: false, private: false, access: { has: obj => "gallery" in obj, get: obj => obj.gallery, set: (obj, value) => { obj.gallery = value; } }, metadata: _metadata }, _gallery_initializers, _gallery_extraInitializers);
            __esDecorate(null, null, _featured_decorators, { kind: "field", name: "featured", static: false, private: false, access: { has: obj => "featured" in obj, get: obj => obj.featured, set: (obj, value) => { obj.featured = value; } }, metadata: _metadata }, _featured_initializers, _featured_extraInitializers);
            __esDecorate(null, null, _showOnHome_decorators, { kind: "field", name: "showOnHome", static: false, private: false, access: { has: obj => "showOnHome" in obj, get: obj => obj.showOnHome, set: (obj, value) => { obj.showOnHome = value; } }, metadata: _metadata }, _showOnHome_initializers, _showOnHome_extraInitializers);
            __esDecorate(null, null, _needsDonation_decorators, { kind: "field", name: "needsDonation", static: false, private: false, access: { has: obj => "needsDonation" in obj, get: obj => obj.needsDonation, set: (obj, value) => { obj.needsDonation = value; } }, metadata: _metadata }, _needsDonation_initializers, _needsDonation_extraInitializers);
            __esDecorate(null, null, _isVisible_decorators, { kind: "field", name: "isVisible", static: false, private: false, access: { has: obj => "isVisible" in obj, get: obj => obj.isVisible, set: (obj, value) => { obj.isVisible = value; } }, metadata: _metadata }, _isVisible_initializers, _isVisible_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Project = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        id = __runInitializers(this, _id_initializers, void 0);
        title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
        slug = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
        description = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _description_initializers, void 0));
        content = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        category = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _category_initializers, void 0));
        categoryId = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
        status = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        budget = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _budget_initializers, void 0));
        currency = (__runInitializers(this, _budget_extraInitializers), __runInitializers(this, _currency_initializers, void 0));
        location = (__runInitializers(this, _currency_extraInitializers), __runInitializers(this, _location_initializers, void 0));
        province = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _province_initializers, void 0));
        beneficiaries = (__runInitializers(this, _province_extraInitializers), __runInitializers(this, _beneficiaries_initializers, void 0));
        startDate = (__runInitializers(this, _beneficiaries_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
        endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
        mainImage = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _mainImage_initializers, void 0));
        gallery = (__runInitializers(this, _mainImage_extraInitializers), __runInitializers(this, _gallery_initializers, void 0));
        featured = (__runInitializers(this, _gallery_extraInitializers), __runInitializers(this, _featured_initializers, void 0));
        showOnHome = (__runInitializers(this, _featured_extraInitializers), __runInitializers(this, _showOnHome_initializers, void 0));
        needsDonation = (__runInitializers(this, _showOnHome_extraInitializers), __runInitializers(this, _needsDonation_initializers, void 0));
        isVisible = (__runInitializers(this, _needsDonation_extraInitializers), __runInitializers(this, _isVisible_initializers, void 0));
        createdAt = (__runInitializers(this, _isVisible_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
        updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
        constructor() {
            __runInitializers(this, _updatedAt_extraInitializers);
        }
    };
    return Project = _classThis;
})();
export { Project };
