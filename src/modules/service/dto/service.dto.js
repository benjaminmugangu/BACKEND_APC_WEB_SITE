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
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsArray, IsObject, IsUrl, MaxLength, ValidateIf, Matches } from 'class-validator';
let CreateServiceDto = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _titleEn_decorators;
    let _titleEn_initializers = [];
    let _titleEn_extraInitializers = [];
    let _slug_decorators;
    let _slug_initializers = [];
    let _slug_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _descriptionEn_decorators;
    let _descriptionEn_initializers = [];
    let _descriptionEn_extraInitializers = [];
    let _iconName_decorators;
    let _iconName_initializers = [];
    let _iconName_extraInitializers = [];
    let _colorHex_decorators;
    let _colorHex_initializers = [];
    let _colorHex_extraInitializers = [];
    let _mainImage_decorators;
    let _mainImage_initializers = [];
    let _mainImage_extraInitializers = [];
    let _actions_decorators;
    let _actions_initializers = [];
    let _actions_extraInitializers = [];
    let _stats_decorators;
    let _stats_initializers = [];
    let _stats_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    return class CreateServiceDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [IsString(), IsNotEmpty({ message: 'Le nom est requis' }), MaxLength(100, { message: 'Le nom ne doit pas dépasser 100 caractères' })];
            _titleEn_decorators = [IsOptional(), IsString(), MaxLength(100)];
            _slug_decorators = [IsString(), IsNotEmpty({ message: 'Le slug est requis' }), MaxLength(100)];
            _description_decorators = [IsString(), IsNotEmpty({ message: 'La description est requise' })];
            _descriptionEn_decorators = [IsOptional(), IsString()];
            _iconName_decorators = [IsOptional(), IsString(), MaxLength(50)];
            _colorHex_decorators = [IsOptional(), IsString(), Matches(/^#[0-9A-Fa-f]{6}$/, { message: 'colorHex must be a valid hex color like #10b981' })];
            _mainImage_decorators = [IsOptional(), ValidateIf(o => o.mainImage !== '' && o.mainImage !== null && o.mainImage !== undefined), IsUrl({}, { message: 'L\'image principale doit être une URL valide' })];
            _actions_decorators = [IsOptional(), IsArray(), IsString({ each: true })];
            _stats_decorators = [IsOptional(), IsArray(), IsObject({ each: true })];
            _isActive_decorators = [IsOptional(), IsBoolean()];
            _order_decorators = [IsOptional(), IsNumber()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _titleEn_decorators, { kind: "field", name: "titleEn", static: false, private: false, access: { has: obj => "titleEn" in obj, get: obj => obj.titleEn, set: (obj, value) => { obj.titleEn = value; } }, metadata: _metadata }, _titleEn_initializers, _titleEn_extraInitializers);
            __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: obj => "slug" in obj, get: obj => obj.slug, set: (obj, value) => { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _descriptionEn_decorators, { kind: "field", name: "descriptionEn", static: false, private: false, access: { has: obj => "descriptionEn" in obj, get: obj => obj.descriptionEn, set: (obj, value) => { obj.descriptionEn = value; } }, metadata: _metadata }, _descriptionEn_initializers, _descriptionEn_extraInitializers);
            __esDecorate(null, null, _iconName_decorators, { kind: "field", name: "iconName", static: false, private: false, access: { has: obj => "iconName" in obj, get: obj => obj.iconName, set: (obj, value) => { obj.iconName = value; } }, metadata: _metadata }, _iconName_initializers, _iconName_extraInitializers);
            __esDecorate(null, null, _colorHex_decorators, { kind: "field", name: "colorHex", static: false, private: false, access: { has: obj => "colorHex" in obj, get: obj => obj.colorHex, set: (obj, value) => { obj.colorHex = value; } }, metadata: _metadata }, _colorHex_initializers, _colorHex_extraInitializers);
            __esDecorate(null, null, _mainImage_decorators, { kind: "field", name: "mainImage", static: false, private: false, access: { has: obj => "mainImage" in obj, get: obj => obj.mainImage, set: (obj, value) => { obj.mainImage = value; } }, metadata: _metadata }, _mainImage_initializers, _mainImage_extraInitializers);
            __esDecorate(null, null, _actions_decorators, { kind: "field", name: "actions", static: false, private: false, access: { has: obj => "actions" in obj, get: obj => obj.actions, set: (obj, value) => { obj.actions = value; } }, metadata: _metadata }, _actions_initializers, _actions_extraInitializers);
            __esDecorate(null, null, _stats_decorators, { kind: "field", name: "stats", static: false, private: false, access: { has: obj => "stats" in obj, get: obj => obj.stats, set: (obj, value) => { obj.stats = value; } }, metadata: _metadata }, _stats_initializers, _stats_extraInitializers);
            __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _name_initializers, void 0);
        titleEn = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _titleEn_initializers, void 0));
        slug = (__runInitializers(this, _titleEn_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
        description = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _description_initializers, void 0));
        descriptionEn = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _descriptionEn_initializers, void 0));
        iconName = (__runInitializers(this, _descriptionEn_extraInitializers), __runInitializers(this, _iconName_initializers, void 0));
        colorHex = (__runInitializers(this, _iconName_extraInitializers), __runInitializers(this, _colorHex_initializers, void 0));
        mainImage = (__runInitializers(this, _colorHex_extraInitializers), __runInitializers(this, _mainImage_initializers, void 0));
        actions = (__runInitializers(this, _mainImage_extraInitializers), __runInitializers(this, _actions_initializers, void 0));
        stats = (__runInitializers(this, _actions_extraInitializers), __runInitializers(this, _stats_initializers, void 0));
        isActive = (__runInitializers(this, _stats_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
        order = (__runInitializers(this, _isActive_extraInitializers), __runInitializers(this, _order_initializers, void 0));
        constructor() {
            __runInitializers(this, _order_extraInitializers);
        }
    };
})();
export { CreateServiceDto };
let UpdateServiceDto = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _titleEn_decorators;
    let _titleEn_initializers = [];
    let _titleEn_extraInitializers = [];
    let _slug_decorators;
    let _slug_initializers = [];
    let _slug_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _descriptionEn_decorators;
    let _descriptionEn_initializers = [];
    let _descriptionEn_extraInitializers = [];
    let _iconName_decorators;
    let _iconName_initializers = [];
    let _iconName_extraInitializers = [];
    let _colorHex_decorators;
    let _colorHex_initializers = [];
    let _colorHex_extraInitializers = [];
    let _mainImage_decorators;
    let _mainImage_initializers = [];
    let _mainImage_extraInitializers = [];
    let _actions_decorators;
    let _actions_initializers = [];
    let _actions_extraInitializers = [];
    let _stats_decorators;
    let _stats_initializers = [];
    let _stats_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    return class UpdateServiceDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [IsOptional(), IsString(), MaxLength(100)];
            _titleEn_decorators = [IsOptional(), IsString(), MaxLength(100)];
            _slug_decorators = [IsOptional(), IsString(), MaxLength(100)];
            _description_decorators = [IsOptional(), IsString()];
            _descriptionEn_decorators = [IsOptional(), IsString()];
            _iconName_decorators = [IsOptional(), IsString(), MaxLength(50)];
            _colorHex_decorators = [IsOptional(), IsString(), Matches(/^#[0-9A-Fa-f]{6}$/)];
            _mainImage_decorators = [IsOptional(), ValidateIf(o => o.mainImage !== '' && o.mainImage !== null && o.mainImage !== undefined), IsUrl()];
            _actions_decorators = [IsOptional(), IsArray(), IsString({ each: true })];
            _stats_decorators = [IsOptional(), IsArray(), IsObject({ each: true })];
            _isActive_decorators = [IsOptional(), IsBoolean()];
            _order_decorators = [IsOptional(), IsNumber()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _titleEn_decorators, { kind: "field", name: "titleEn", static: false, private: false, access: { has: obj => "titleEn" in obj, get: obj => obj.titleEn, set: (obj, value) => { obj.titleEn = value; } }, metadata: _metadata }, _titleEn_initializers, _titleEn_extraInitializers);
            __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: obj => "slug" in obj, get: obj => obj.slug, set: (obj, value) => { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _descriptionEn_decorators, { kind: "field", name: "descriptionEn", static: false, private: false, access: { has: obj => "descriptionEn" in obj, get: obj => obj.descriptionEn, set: (obj, value) => { obj.descriptionEn = value; } }, metadata: _metadata }, _descriptionEn_initializers, _descriptionEn_extraInitializers);
            __esDecorate(null, null, _iconName_decorators, { kind: "field", name: "iconName", static: false, private: false, access: { has: obj => "iconName" in obj, get: obj => obj.iconName, set: (obj, value) => { obj.iconName = value; } }, metadata: _metadata }, _iconName_initializers, _iconName_extraInitializers);
            __esDecorate(null, null, _colorHex_decorators, { kind: "field", name: "colorHex", static: false, private: false, access: { has: obj => "colorHex" in obj, get: obj => obj.colorHex, set: (obj, value) => { obj.colorHex = value; } }, metadata: _metadata }, _colorHex_initializers, _colorHex_extraInitializers);
            __esDecorate(null, null, _mainImage_decorators, { kind: "field", name: "mainImage", static: false, private: false, access: { has: obj => "mainImage" in obj, get: obj => obj.mainImage, set: (obj, value) => { obj.mainImage = value; } }, metadata: _metadata }, _mainImage_initializers, _mainImage_extraInitializers);
            __esDecorate(null, null, _actions_decorators, { kind: "field", name: "actions", static: false, private: false, access: { has: obj => "actions" in obj, get: obj => obj.actions, set: (obj, value) => { obj.actions = value; } }, metadata: _metadata }, _actions_initializers, _actions_extraInitializers);
            __esDecorate(null, null, _stats_decorators, { kind: "field", name: "stats", static: false, private: false, access: { has: obj => "stats" in obj, get: obj => obj.stats, set: (obj, value) => { obj.stats = value; } }, metadata: _metadata }, _stats_initializers, _stats_extraInitializers);
            __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _name_initializers, void 0);
        titleEn = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _titleEn_initializers, void 0));
        slug = (__runInitializers(this, _titleEn_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
        description = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _description_initializers, void 0));
        descriptionEn = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _descriptionEn_initializers, void 0));
        iconName = (__runInitializers(this, _descriptionEn_extraInitializers), __runInitializers(this, _iconName_initializers, void 0));
        colorHex = (__runInitializers(this, _iconName_extraInitializers), __runInitializers(this, _colorHex_initializers, void 0));
        mainImage = (__runInitializers(this, _colorHex_extraInitializers), __runInitializers(this, _mainImage_initializers, void 0));
        actions = (__runInitializers(this, _mainImage_extraInitializers), __runInitializers(this, _actions_initializers, void 0));
        stats = (__runInitializers(this, _actions_extraInitializers), __runInitializers(this, _stats_initializers, void 0));
        isActive = (__runInitializers(this, _stats_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
        order = (__runInitializers(this, _isActive_extraInitializers), __runInitializers(this, _order_initializers, void 0));
        constructor() {
            __runInitializers(this, _order_extraInitializers);
        }
    };
})();
export { UpdateServiceDto };
