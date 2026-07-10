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
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber } from 'class-validator';
let CreateCareerTypeDto = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _nameEn_decorators;
    let _nameEn_initializers = [];
    let _nameEn_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    return class CreateCareerTypeDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [IsString(), IsNotEmpty({ message: 'Le nom du type est requis' })];
            _nameEn_decorators = [IsOptional(), IsString()];
            _isActive_decorators = [IsOptional(), IsBoolean()];
            _order_decorators = [IsOptional(), IsNumber()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _nameEn_decorators, { kind: "field", name: "nameEn", static: false, private: false, access: { has: obj => "nameEn" in obj, get: obj => obj.nameEn, set: (obj, value) => { obj.nameEn = value; } }, metadata: _metadata }, _nameEn_initializers, _nameEn_extraInitializers);
            __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _name_initializers, void 0);
        nameEn = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _nameEn_initializers, void 0));
        isActive = (__runInitializers(this, _nameEn_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
        order = (__runInitializers(this, _isActive_extraInitializers), __runInitializers(this, _order_initializers, void 0));
        constructor() {
            __runInitializers(this, _order_extraInitializers);
        }
    };
})();
export { CreateCareerTypeDto };
let UpdateCareerTypeDto = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _nameEn_decorators;
    let _nameEn_initializers = [];
    let _nameEn_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    return class UpdateCareerTypeDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [IsOptional(), IsString()];
            _nameEn_decorators = [IsOptional(), IsString()];
            _isActive_decorators = [IsOptional(), IsBoolean()];
            _order_decorators = [IsOptional(), IsNumber()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _nameEn_decorators, { kind: "field", name: "nameEn", static: false, private: false, access: { has: obj => "nameEn" in obj, get: obj => obj.nameEn, set: (obj, value) => { obj.nameEn = value; } }, metadata: _metadata }, _nameEn_initializers, _nameEn_extraInitializers);
            __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _name_initializers, void 0);
        nameEn = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _nameEn_initializers, void 0));
        isActive = (__runInitializers(this, _nameEn_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
        order = (__runInitializers(this, _isActive_extraInitializers), __runInitializers(this, _order_initializers, void 0));
        constructor() {
            __runInitializers(this, _order_extraInitializers);
        }
    };
})();
export { UpdateCareerTypeDto };
