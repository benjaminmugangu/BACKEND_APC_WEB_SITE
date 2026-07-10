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
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEnum, IsNumber, IsDateString } from 'class-validator';
import { NewsStatus } from '@/entities/news.entity';
let CreateNewsDto = (() => {
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _slug_decorators;
    let _slug_initializers = [];
    let _slug_extraInitializers = [];
    let _excerpt_decorators;
    let _excerpt_initializers = [];
    let _excerpt_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _categoryId_decorators;
    let _categoryId_initializers = [];
    let _categoryId_extraInitializers = [];
    let _author_decorators;
    let _author_initializers = [];
    let _author_extraInitializers = [];
    let _authorId_decorators;
    let _authorId_initializers = [];
    let _authorId_extraInitializers = [];
    let _readTime_decorators;
    let _readTime_initializers = [];
    let _readTime_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _featured_decorators;
    let _featured_initializers = [];
    let _featured_extraInitializers = [];
    let _includeNewsletter_decorators;
    let _includeNewsletter_initializers = [];
    let _includeNewsletter_extraInitializers = [];
    let _mainImage_decorators;
    let _mainImage_initializers = [];
    let _mainImage_extraInitializers = [];
    let _publishDate_decorators;
    let _publishDate_initializers = [];
    let _publishDate_extraInitializers = [];
    let _scheduledDate_decorators;
    let _scheduledDate_initializers = [];
    let _scheduledDate_extraInitializers = [];
    return class CreateNewsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [IsString(), IsNotEmpty({ message: 'Le titre est requis' })];
            _slug_decorators = [IsString(), IsNotEmpty({ message: 'Le slug est requis' })];
            _excerpt_decorators = [IsString(), IsNotEmpty({ message: "L'extrait (excerpt) est requis" })];
            _content_decorators = [IsString(), IsNotEmpty({ message: 'Le contenu est requis' })];
            _categoryId_decorators = [IsOptional(), IsString()];
            _author_decorators = [IsOptional(), IsString()];
            _authorId_decorators = [IsOptional(), IsString()];
            _readTime_decorators = [IsOptional(), IsNumber()];
            _status_decorators = [IsOptional(), IsEnum(NewsStatus)];
            _featured_decorators = [IsOptional(), IsBoolean()];
            _includeNewsletter_decorators = [IsOptional(), IsBoolean()];
            _mainImage_decorators = [IsOptional(), IsString()];
            _publishDate_decorators = [IsOptional(), IsDateString()];
            _scheduledDate_decorators = [IsOptional(), IsDateString()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: obj => "slug" in obj, get: obj => obj.slug, set: (obj, value) => { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
            __esDecorate(null, null, _excerpt_decorators, { kind: "field", name: "excerpt", static: false, private: false, access: { has: obj => "excerpt" in obj, get: obj => obj.excerpt, set: (obj, value) => { obj.excerpt = value; } }, metadata: _metadata }, _excerpt_initializers, _excerpt_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: obj => "categoryId" in obj, get: obj => obj.categoryId, set: (obj, value) => { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
            __esDecorate(null, null, _author_decorators, { kind: "field", name: "author", static: false, private: false, access: { has: obj => "author" in obj, get: obj => obj.author, set: (obj, value) => { obj.author = value; } }, metadata: _metadata }, _author_initializers, _author_extraInitializers);
            __esDecorate(null, null, _authorId_decorators, { kind: "field", name: "authorId", static: false, private: false, access: { has: obj => "authorId" in obj, get: obj => obj.authorId, set: (obj, value) => { obj.authorId = value; } }, metadata: _metadata }, _authorId_initializers, _authorId_extraInitializers);
            __esDecorate(null, null, _readTime_decorators, { kind: "field", name: "readTime", static: false, private: false, access: { has: obj => "readTime" in obj, get: obj => obj.readTime, set: (obj, value) => { obj.readTime = value; } }, metadata: _metadata }, _readTime_initializers, _readTime_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _featured_decorators, { kind: "field", name: "featured", static: false, private: false, access: { has: obj => "featured" in obj, get: obj => obj.featured, set: (obj, value) => { obj.featured = value; } }, metadata: _metadata }, _featured_initializers, _featured_extraInitializers);
            __esDecorate(null, null, _includeNewsletter_decorators, { kind: "field", name: "includeNewsletter", static: false, private: false, access: { has: obj => "includeNewsletter" in obj, get: obj => obj.includeNewsletter, set: (obj, value) => { obj.includeNewsletter = value; } }, metadata: _metadata }, _includeNewsletter_initializers, _includeNewsletter_extraInitializers);
            __esDecorate(null, null, _mainImage_decorators, { kind: "field", name: "mainImage", static: false, private: false, access: { has: obj => "mainImage" in obj, get: obj => obj.mainImage, set: (obj, value) => { obj.mainImage = value; } }, metadata: _metadata }, _mainImage_initializers, _mainImage_extraInitializers);
            __esDecorate(null, null, _publishDate_decorators, { kind: "field", name: "publishDate", static: false, private: false, access: { has: obj => "publishDate" in obj, get: obj => obj.publishDate, set: (obj, value) => { obj.publishDate = value; } }, metadata: _metadata }, _publishDate_initializers, _publishDate_extraInitializers);
            __esDecorate(null, null, _scheduledDate_decorators, { kind: "field", name: "scheduledDate", static: false, private: false, access: { has: obj => "scheduledDate" in obj, get: obj => obj.scheduledDate, set: (obj, value) => { obj.scheduledDate = value; } }, metadata: _metadata }, _scheduledDate_initializers, _scheduledDate_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        title = __runInitializers(this, _title_initializers, void 0);
        slug = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
        excerpt = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _excerpt_initializers, void 0));
        content = (__runInitializers(this, _excerpt_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        categoryId = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
        author = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _author_initializers, void 0));
        authorId = (__runInitializers(this, _author_extraInitializers), __runInitializers(this, _authorId_initializers, void 0));
        readTime = (__runInitializers(this, _authorId_extraInitializers), __runInitializers(this, _readTime_initializers, void 0));
        status = (__runInitializers(this, _readTime_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        featured = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _featured_initializers, void 0));
        includeNewsletter = (__runInitializers(this, _featured_extraInitializers), __runInitializers(this, _includeNewsletter_initializers, void 0));
        mainImage = (__runInitializers(this, _includeNewsletter_extraInitializers), __runInitializers(this, _mainImage_initializers, void 0));
        publishDate = (__runInitializers(this, _mainImage_extraInitializers), __runInitializers(this, _publishDate_initializers, void 0));
        scheduledDate = (__runInitializers(this, _publishDate_extraInitializers), __runInitializers(this, _scheduledDate_initializers, void 0));
        constructor() {
            __runInitializers(this, _scheduledDate_extraInitializers);
        }
    };
})();
export { CreateNewsDto };
let UpdateNewsDto = (() => {
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _slug_decorators;
    let _slug_initializers = [];
    let _slug_extraInitializers = [];
    let _excerpt_decorators;
    let _excerpt_initializers = [];
    let _excerpt_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _categoryId_decorators;
    let _categoryId_initializers = [];
    let _categoryId_extraInitializers = [];
    let _author_decorators;
    let _author_initializers = [];
    let _author_extraInitializers = [];
    let _authorId_decorators;
    let _authorId_initializers = [];
    let _authorId_extraInitializers = [];
    let _readTime_decorators;
    let _readTime_initializers = [];
    let _readTime_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _featured_decorators;
    let _featured_initializers = [];
    let _featured_extraInitializers = [];
    let _includeNewsletter_decorators;
    let _includeNewsletter_initializers = [];
    let _includeNewsletter_extraInitializers = [];
    let _mainImage_decorators;
    let _mainImage_initializers = [];
    let _mainImage_extraInitializers = [];
    let _publishDate_decorators;
    let _publishDate_initializers = [];
    let _publishDate_extraInitializers = [];
    let _scheduledDate_decorators;
    let _scheduledDate_initializers = [];
    let _scheduledDate_extraInitializers = [];
    return class UpdateNewsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [IsOptional(), IsString()];
            _slug_decorators = [IsOptional(), IsString()];
            _excerpt_decorators = [IsOptional(), IsString()];
            _content_decorators = [IsOptional(), IsString()];
            _categoryId_decorators = [IsOptional(), IsString()];
            _author_decorators = [IsOptional(), IsString()];
            _authorId_decorators = [IsOptional(), IsString()];
            _readTime_decorators = [IsOptional(), IsNumber()];
            _status_decorators = [IsOptional(), IsEnum(NewsStatus)];
            _featured_decorators = [IsOptional(), IsBoolean()];
            _includeNewsletter_decorators = [IsOptional(), IsBoolean()];
            _mainImage_decorators = [IsOptional(), IsString()];
            _publishDate_decorators = [IsOptional(), IsDateString()];
            _scheduledDate_decorators = [IsOptional(), IsDateString()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: obj => "slug" in obj, get: obj => obj.slug, set: (obj, value) => { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
            __esDecorate(null, null, _excerpt_decorators, { kind: "field", name: "excerpt", static: false, private: false, access: { has: obj => "excerpt" in obj, get: obj => obj.excerpt, set: (obj, value) => { obj.excerpt = value; } }, metadata: _metadata }, _excerpt_initializers, _excerpt_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: obj => "categoryId" in obj, get: obj => obj.categoryId, set: (obj, value) => { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
            __esDecorate(null, null, _author_decorators, { kind: "field", name: "author", static: false, private: false, access: { has: obj => "author" in obj, get: obj => obj.author, set: (obj, value) => { obj.author = value; } }, metadata: _metadata }, _author_initializers, _author_extraInitializers);
            __esDecorate(null, null, _authorId_decorators, { kind: "field", name: "authorId", static: false, private: false, access: { has: obj => "authorId" in obj, get: obj => obj.authorId, set: (obj, value) => { obj.authorId = value; } }, metadata: _metadata }, _authorId_initializers, _authorId_extraInitializers);
            __esDecorate(null, null, _readTime_decorators, { kind: "field", name: "readTime", static: false, private: false, access: { has: obj => "readTime" in obj, get: obj => obj.readTime, set: (obj, value) => { obj.readTime = value; } }, metadata: _metadata }, _readTime_initializers, _readTime_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _featured_decorators, { kind: "field", name: "featured", static: false, private: false, access: { has: obj => "featured" in obj, get: obj => obj.featured, set: (obj, value) => { obj.featured = value; } }, metadata: _metadata }, _featured_initializers, _featured_extraInitializers);
            __esDecorate(null, null, _includeNewsletter_decorators, { kind: "field", name: "includeNewsletter", static: false, private: false, access: { has: obj => "includeNewsletter" in obj, get: obj => obj.includeNewsletter, set: (obj, value) => { obj.includeNewsletter = value; } }, metadata: _metadata }, _includeNewsletter_initializers, _includeNewsletter_extraInitializers);
            __esDecorate(null, null, _mainImage_decorators, { kind: "field", name: "mainImage", static: false, private: false, access: { has: obj => "mainImage" in obj, get: obj => obj.mainImage, set: (obj, value) => { obj.mainImage = value; } }, metadata: _metadata }, _mainImage_initializers, _mainImage_extraInitializers);
            __esDecorate(null, null, _publishDate_decorators, { kind: "field", name: "publishDate", static: false, private: false, access: { has: obj => "publishDate" in obj, get: obj => obj.publishDate, set: (obj, value) => { obj.publishDate = value; } }, metadata: _metadata }, _publishDate_initializers, _publishDate_extraInitializers);
            __esDecorate(null, null, _scheduledDate_decorators, { kind: "field", name: "scheduledDate", static: false, private: false, access: { has: obj => "scheduledDate" in obj, get: obj => obj.scheduledDate, set: (obj, value) => { obj.scheduledDate = value; } }, metadata: _metadata }, _scheduledDate_initializers, _scheduledDate_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        title = __runInitializers(this, _title_initializers, void 0);
        slug = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
        excerpt = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _excerpt_initializers, void 0));
        content = (__runInitializers(this, _excerpt_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        categoryId = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
        author = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _author_initializers, void 0));
        authorId = (__runInitializers(this, _author_extraInitializers), __runInitializers(this, _authorId_initializers, void 0));
        readTime = (__runInitializers(this, _authorId_extraInitializers), __runInitializers(this, _readTime_initializers, void 0));
        status = (__runInitializers(this, _readTime_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        featured = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _featured_initializers, void 0));
        includeNewsletter = (__runInitializers(this, _featured_extraInitializers), __runInitializers(this, _includeNewsletter_initializers, void 0));
        mainImage = (__runInitializers(this, _includeNewsletter_extraInitializers), __runInitializers(this, _mainImage_initializers, void 0));
        publishDate = (__runInitializers(this, _mainImage_extraInitializers), __runInitializers(this, _publishDate_initializers, void 0));
        scheduledDate = (__runInitializers(this, _publishDate_extraInitializers), __runInitializers(this, _scheduledDate_initializers, void 0));
        constructor() {
            __runInitializers(this, _scheduledDate_extraInitializers);
        }
    };
})();
export { UpdateNewsDto };
