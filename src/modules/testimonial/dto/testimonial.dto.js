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
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { TestimonialStatus } from '@/entities/testimonial.entity';
let CreateTestimonialDto = (() => {
    let _authorName_decorators;
    let _authorName_initializers = [];
    let _authorName_extraInitializers = [];
    let _authorRole_decorators;
    let _authorRole_initializers = [];
    let _authorRole_extraInitializers = [];
    let _authorLocation_decorators;
    let _authorLocation_initializers = [];
    let _authorLocation_extraInitializers = [];
    let _photoUrl_decorators;
    let _photoUrl_initializers = [];
    let _photoUrl_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _projectName_decorators;
    let _projectName_initializers = [];
    let _projectName_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    return class CreateTestimonialDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _authorName_decorators = [IsString(), IsNotEmpty({ message: 'Le nom du bénéficiaire est requis' })];
            _authorRole_decorators = [IsOptional(), IsString()];
            _authorLocation_decorators = [IsOptional(), IsString()];
            _photoUrl_decorators = [IsOptional(), IsString()];
            _content_decorators = [IsString(), IsNotEmpty({ message: 'Le contenu du témoignage est requis' })];
            _projectName_decorators = [IsOptional(), IsString()];
            _status_decorators = [IsOptional(), IsEnum(TestimonialStatus)];
            _order_decorators = [IsOptional(), IsNumber()];
            __esDecorate(null, null, _authorName_decorators, { kind: "field", name: "authorName", static: false, private: false, access: { has: obj => "authorName" in obj, get: obj => obj.authorName, set: (obj, value) => { obj.authorName = value; } }, metadata: _metadata }, _authorName_initializers, _authorName_extraInitializers);
            __esDecorate(null, null, _authorRole_decorators, { kind: "field", name: "authorRole", static: false, private: false, access: { has: obj => "authorRole" in obj, get: obj => obj.authorRole, set: (obj, value) => { obj.authorRole = value; } }, metadata: _metadata }, _authorRole_initializers, _authorRole_extraInitializers);
            __esDecorate(null, null, _authorLocation_decorators, { kind: "field", name: "authorLocation", static: false, private: false, access: { has: obj => "authorLocation" in obj, get: obj => obj.authorLocation, set: (obj, value) => { obj.authorLocation = value; } }, metadata: _metadata }, _authorLocation_initializers, _authorLocation_extraInitializers);
            __esDecorate(null, null, _photoUrl_decorators, { kind: "field", name: "photoUrl", static: false, private: false, access: { has: obj => "photoUrl" in obj, get: obj => obj.photoUrl, set: (obj, value) => { obj.photoUrl = value; } }, metadata: _metadata }, _photoUrl_initializers, _photoUrl_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _projectName_decorators, { kind: "field", name: "projectName", static: false, private: false, access: { has: obj => "projectName" in obj, get: obj => obj.projectName, set: (obj, value) => { obj.projectName = value; } }, metadata: _metadata }, _projectName_initializers, _projectName_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        authorName = __runInitializers(this, _authorName_initializers, void 0);
        authorRole = (__runInitializers(this, _authorName_extraInitializers), __runInitializers(this, _authorRole_initializers, void 0));
        authorLocation = (__runInitializers(this, _authorRole_extraInitializers), __runInitializers(this, _authorLocation_initializers, void 0));
        photoUrl = (__runInitializers(this, _authorLocation_extraInitializers), __runInitializers(this, _photoUrl_initializers, void 0));
        content = (__runInitializers(this, _photoUrl_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        projectName = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _projectName_initializers, void 0));
        status = (__runInitializers(this, _projectName_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        order = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _order_initializers, void 0));
        constructor() {
            __runInitializers(this, _order_extraInitializers);
        }
    };
})();
export { CreateTestimonialDto };
let UpdateTestimonialDto = (() => {
    let _authorName_decorators;
    let _authorName_initializers = [];
    let _authorName_extraInitializers = [];
    let _authorRole_decorators;
    let _authorRole_initializers = [];
    let _authorRole_extraInitializers = [];
    let _authorLocation_decorators;
    let _authorLocation_initializers = [];
    let _authorLocation_extraInitializers = [];
    let _photoUrl_decorators;
    let _photoUrl_initializers = [];
    let _photoUrl_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _projectName_decorators;
    let _projectName_initializers = [];
    let _projectName_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    return class UpdateTestimonialDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _authorName_decorators = [IsOptional(), IsString()];
            _authorRole_decorators = [IsOptional(), IsString()];
            _authorLocation_decorators = [IsOptional(), IsString()];
            _photoUrl_decorators = [IsOptional(), IsString()];
            _content_decorators = [IsOptional(), IsString()];
            _projectName_decorators = [IsOptional(), IsString()];
            _status_decorators = [IsOptional(), IsEnum(TestimonialStatus)];
            _order_decorators = [IsOptional(), IsNumber()];
            __esDecorate(null, null, _authorName_decorators, { kind: "field", name: "authorName", static: false, private: false, access: { has: obj => "authorName" in obj, get: obj => obj.authorName, set: (obj, value) => { obj.authorName = value; } }, metadata: _metadata }, _authorName_initializers, _authorName_extraInitializers);
            __esDecorate(null, null, _authorRole_decorators, { kind: "field", name: "authorRole", static: false, private: false, access: { has: obj => "authorRole" in obj, get: obj => obj.authorRole, set: (obj, value) => { obj.authorRole = value; } }, metadata: _metadata }, _authorRole_initializers, _authorRole_extraInitializers);
            __esDecorate(null, null, _authorLocation_decorators, { kind: "field", name: "authorLocation", static: false, private: false, access: { has: obj => "authorLocation" in obj, get: obj => obj.authorLocation, set: (obj, value) => { obj.authorLocation = value; } }, metadata: _metadata }, _authorLocation_initializers, _authorLocation_extraInitializers);
            __esDecorate(null, null, _photoUrl_decorators, { kind: "field", name: "photoUrl", static: false, private: false, access: { has: obj => "photoUrl" in obj, get: obj => obj.photoUrl, set: (obj, value) => { obj.photoUrl = value; } }, metadata: _metadata }, _photoUrl_initializers, _photoUrl_extraInitializers);
            __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(null, null, _projectName_decorators, { kind: "field", name: "projectName", static: false, private: false, access: { has: obj => "projectName" in obj, get: obj => obj.projectName, set: (obj, value) => { obj.projectName = value; } }, metadata: _metadata }, _projectName_initializers, _projectName_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        authorName = __runInitializers(this, _authorName_initializers, void 0);
        authorRole = (__runInitializers(this, _authorName_extraInitializers), __runInitializers(this, _authorRole_initializers, void 0));
        authorLocation = (__runInitializers(this, _authorRole_extraInitializers), __runInitializers(this, _authorLocation_initializers, void 0));
        photoUrl = (__runInitializers(this, _authorLocation_extraInitializers), __runInitializers(this, _photoUrl_initializers, void 0));
        content = (__runInitializers(this, _photoUrl_extraInitializers), __runInitializers(this, _content_initializers, void 0));
        projectName = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _projectName_initializers, void 0));
        status = (__runInitializers(this, _projectName_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        order = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _order_initializers, void 0));
        constructor() {
            __runInitializers(this, _order_extraInitializers);
        }
    };
})();
export { UpdateTestimonialDto };
