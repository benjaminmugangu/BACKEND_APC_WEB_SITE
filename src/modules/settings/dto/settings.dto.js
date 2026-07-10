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
import { IsString, IsOptional, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
let HeroSettingsDto = (() => {
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _subtitle_decorators;
    let _subtitle_initializers = [];
    let _subtitle_extraInitializers = [];
    let _imageUrl_decorators;
    let _imageUrl_initializers = [];
    let _imageUrl_extraInitializers = [];
    return class HeroSettingsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [IsString(), IsOptional()];
            _subtitle_decorators = [IsString(), IsOptional()];
            _imageUrl_decorators = [IsString(), IsOptional()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _subtitle_decorators, { kind: "field", name: "subtitle", static: false, private: false, access: { has: obj => "subtitle" in obj, get: obj => obj.subtitle, set: (obj, value) => { obj.subtitle = value; } }, metadata: _metadata }, _subtitle_initializers, _subtitle_extraInitializers);
            __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: obj => "imageUrl" in obj, get: obj => obj.imageUrl, set: (obj, value) => { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _imageUrl_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        title = __runInitializers(this, _title_initializers, void 0);
        subtitle = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _subtitle_initializers, void 0));
        imageUrl = (__runInitializers(this, _subtitle_extraInitializers), __runInitializers(this, _imageUrl_initializers, void 0));
        constructor() {
            __runInitializers(this, _imageUrl_extraInitializers);
        }
    };
})();
let StatsSettingsDto = (() => {
    let _beneficiaries_decorators;
    let _beneficiaries_initializers = [];
    let _beneficiaries_extraInitializers = [];
    let _projects_decorators;
    let _projects_initializers = [];
    let _projects_extraInitializers = [];
    let _provinces_decorators;
    let _provinces_initializers = [];
    let _provinces_extraInitializers = [];
    let _partners_decorators;
    let _partners_initializers = [];
    let _partners_extraInitializers = [];
    let _teamMembers_decorators;
    let _teamMembers_initializers = [];
    let _teamMembers_extraInitializers = [];
    return class StatsSettingsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _beneficiaries_decorators = [IsString(), IsOptional()];
            _projects_decorators = [IsString(), IsOptional()];
            _provinces_decorators = [IsString(), IsOptional()];
            _partners_decorators = [IsString(), IsOptional()];
            _teamMembers_decorators = [IsString(), IsOptional()];
            __esDecorate(null, null, _beneficiaries_decorators, { kind: "field", name: "beneficiaries", static: false, private: false, access: { has: obj => "beneficiaries" in obj, get: obj => obj.beneficiaries, set: (obj, value) => { obj.beneficiaries = value; } }, metadata: _metadata }, _beneficiaries_initializers, _beneficiaries_extraInitializers);
            __esDecorate(null, null, _projects_decorators, { kind: "field", name: "projects", static: false, private: false, access: { has: obj => "projects" in obj, get: obj => obj.projects, set: (obj, value) => { obj.projects = value; } }, metadata: _metadata }, _projects_initializers, _projects_extraInitializers);
            __esDecorate(null, null, _provinces_decorators, { kind: "field", name: "provinces", static: false, private: false, access: { has: obj => "provinces" in obj, get: obj => obj.provinces, set: (obj, value) => { obj.provinces = value; } }, metadata: _metadata }, _provinces_initializers, _provinces_extraInitializers);
            __esDecorate(null, null, _partners_decorators, { kind: "field", name: "partners", static: false, private: false, access: { has: obj => "partners" in obj, get: obj => obj.partners, set: (obj, value) => { obj.partners = value; } }, metadata: _metadata }, _partners_initializers, _partners_extraInitializers);
            __esDecorate(null, null, _teamMembers_decorators, { kind: "field", name: "teamMembers", static: false, private: false, access: { has: obj => "teamMembers" in obj, get: obj => obj.teamMembers, set: (obj, value) => { obj.teamMembers = value; } }, metadata: _metadata }, _teamMembers_initializers, _teamMembers_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        beneficiaries = __runInitializers(this, _beneficiaries_initializers, void 0);
        projects = (__runInitializers(this, _beneficiaries_extraInitializers), __runInitializers(this, _projects_initializers, void 0));
        provinces = (__runInitializers(this, _projects_extraInitializers), __runInitializers(this, _provinces_initializers, void 0));
        partners = (__runInitializers(this, _provinces_extraInitializers), __runInitializers(this, _partners_initializers, void 0));
        teamMembers = (__runInitializers(this, _partners_extraInitializers), __runInitializers(this, _teamMembers_initializers, void 0));
        constructor() {
            __runInitializers(this, _teamMembers_extraInitializers);
        }
    };
})();
let ContactSocialsDto = (() => {
    let _facebook_decorators;
    let _facebook_initializers = [];
    let _facebook_extraInitializers = [];
    let _twitter_decorators;
    let _twitter_initializers = [];
    let _twitter_extraInitializers = [];
    let _linkedin_decorators;
    let _linkedin_initializers = [];
    let _linkedin_extraInitializers = [];
    let _instagram_decorators;
    let _instagram_initializers = [];
    let _instagram_extraInitializers = [];
    let _youtube_decorators;
    let _youtube_initializers = [];
    let _youtube_extraInitializers = [];
    return class ContactSocialsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _facebook_decorators = [IsString(), IsOptional()];
            _twitter_decorators = [IsString(), IsOptional()];
            _linkedin_decorators = [IsString(), IsOptional()];
            _instagram_decorators = [IsString(), IsOptional()];
            _youtube_decorators = [IsString(), IsOptional()];
            __esDecorate(null, null, _facebook_decorators, { kind: "field", name: "facebook", static: false, private: false, access: { has: obj => "facebook" in obj, get: obj => obj.facebook, set: (obj, value) => { obj.facebook = value; } }, metadata: _metadata }, _facebook_initializers, _facebook_extraInitializers);
            __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: obj => "twitter" in obj, get: obj => obj.twitter, set: (obj, value) => { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
            __esDecorate(null, null, _linkedin_decorators, { kind: "field", name: "linkedin", static: false, private: false, access: { has: obj => "linkedin" in obj, get: obj => obj.linkedin, set: (obj, value) => { obj.linkedin = value; } }, metadata: _metadata }, _linkedin_initializers, _linkedin_extraInitializers);
            __esDecorate(null, null, _instagram_decorators, { kind: "field", name: "instagram", static: false, private: false, access: { has: obj => "instagram" in obj, get: obj => obj.instagram, set: (obj, value) => { obj.instagram = value; } }, metadata: _metadata }, _instagram_initializers, _instagram_extraInitializers);
            __esDecorate(null, null, _youtube_decorators, { kind: "field", name: "youtube", static: false, private: false, access: { has: obj => "youtube" in obj, get: obj => obj.youtube, set: (obj, value) => { obj.youtube = value; } }, metadata: _metadata }, _youtube_initializers, _youtube_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        facebook = __runInitializers(this, _facebook_initializers, void 0);
        twitter = (__runInitializers(this, _facebook_extraInitializers), __runInitializers(this, _twitter_initializers, void 0));
        linkedin = (__runInitializers(this, _twitter_extraInitializers), __runInitializers(this, _linkedin_initializers, void 0));
        instagram = (__runInitializers(this, _linkedin_extraInitializers), __runInitializers(this, _instagram_initializers, void 0));
        youtube = (__runInitializers(this, _instagram_extraInitializers), __runInitializers(this, _youtube_initializers, void 0));
        constructor() {
            __runInitializers(this, _youtube_extraInitializers);
        }
    };
})();
let ContactSettingsDto = (() => {
    let _address_decorators;
    let _address_initializers = [];
    let _address_extraInitializers = [];
    let _phone1_decorators;
    let _phone1_initializers = [];
    let _phone1_extraInitializers = [];
    let _phone2_decorators;
    let _phone2_initializers = [];
    let _phone2_extraInitializers = [];
    let _whatsapp_decorators;
    let _whatsapp_initializers = [];
    let _whatsapp_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _emailSupport_decorators;
    let _emailSupport_initializers = [];
    let _emailSupport_extraInitializers = [];
    let _emailCareers_decorators;
    let _emailCareers_initializers = [];
    let _emailCareers_extraInitializers = [];
    let _socials_decorators;
    let _socials_initializers = [];
    let _socials_extraInitializers = [];
    return class ContactSettingsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _address_decorators = [IsString(), IsOptional()];
            _phone1_decorators = [IsString(), IsOptional()];
            _phone2_decorators = [IsString(), IsOptional()];
            _whatsapp_decorators = [IsString(), IsOptional()];
            _email_decorators = [IsString(), IsOptional()];
            _emailSupport_decorators = [IsString(), IsOptional()];
            _emailCareers_decorators = [IsString(), IsOptional()];
            _socials_decorators = [IsObject(), IsOptional(), ValidateNested(), Type(() => ContactSocialsDto)];
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: obj => "address" in obj, get: obj => obj.address, set: (obj, value) => { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
            __esDecorate(null, null, _phone1_decorators, { kind: "field", name: "phone1", static: false, private: false, access: { has: obj => "phone1" in obj, get: obj => obj.phone1, set: (obj, value) => { obj.phone1 = value; } }, metadata: _metadata }, _phone1_initializers, _phone1_extraInitializers);
            __esDecorate(null, null, _phone2_decorators, { kind: "field", name: "phone2", static: false, private: false, access: { has: obj => "phone2" in obj, get: obj => obj.phone2, set: (obj, value) => { obj.phone2 = value; } }, metadata: _metadata }, _phone2_initializers, _phone2_extraInitializers);
            __esDecorate(null, null, _whatsapp_decorators, { kind: "field", name: "whatsapp", static: false, private: false, access: { has: obj => "whatsapp" in obj, get: obj => obj.whatsapp, set: (obj, value) => { obj.whatsapp = value; } }, metadata: _metadata }, _whatsapp_initializers, _whatsapp_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _emailSupport_decorators, { kind: "field", name: "emailSupport", static: false, private: false, access: { has: obj => "emailSupport" in obj, get: obj => obj.emailSupport, set: (obj, value) => { obj.emailSupport = value; } }, metadata: _metadata }, _emailSupport_initializers, _emailSupport_extraInitializers);
            __esDecorate(null, null, _emailCareers_decorators, { kind: "field", name: "emailCareers", static: false, private: false, access: { has: obj => "emailCareers" in obj, get: obj => obj.emailCareers, set: (obj, value) => { obj.emailCareers = value; } }, metadata: _metadata }, _emailCareers_initializers, _emailCareers_extraInitializers);
            __esDecorate(null, null, _socials_decorators, { kind: "field", name: "socials", static: false, private: false, access: { has: obj => "socials" in obj, get: obj => obj.socials, set: (obj, value) => { obj.socials = value; } }, metadata: _metadata }, _socials_initializers, _socials_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        address = __runInitializers(this, _address_initializers, void 0);
        phone1 = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _phone1_initializers, void 0));
        phone2 = (__runInitializers(this, _phone1_extraInitializers), __runInitializers(this, _phone2_initializers, void 0));
        whatsapp = (__runInitializers(this, _phone2_extraInitializers), __runInitializers(this, _whatsapp_initializers, void 0));
        email = (__runInitializers(this, _whatsapp_extraInitializers), __runInitializers(this, _email_initializers, void 0));
        emailSupport = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _emailSupport_initializers, void 0));
        emailCareers = (__runInitializers(this, _emailSupport_extraInitializers), __runInitializers(this, _emailCareers_initializers, void 0));
        socials = (__runInitializers(this, _emailCareers_extraInitializers), __runInitializers(this, _socials_initializers, void 0));
        constructor() {
            __runInitializers(this, _socials_extraInitializers);
        }
    };
})();
let InstitutionSettingsDto = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _acronym_decorators;
    let _acronym_initializers = [];
    let _acronym_extraInitializers = [];
    let _foundationYear_decorators;
    let _foundationYear_initializers = [];
    let _foundationYear_extraInitializers = [];
    let _vision_decorators;
    let _vision_initializers = [];
    let _vision_extraInitializers = [];
    let _mission_decorators;
    let _mission_initializers = [];
    let _mission_extraInitializers = [];
    return class InstitutionSettingsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [IsString(), IsOptional()];
            _acronym_decorators = [IsString(), IsOptional()];
            _foundationYear_decorators = [IsString(), IsOptional()];
            _vision_decorators = [IsString(), IsOptional()];
            _mission_decorators = [IsString(), IsOptional()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _acronym_decorators, { kind: "field", name: "acronym", static: false, private: false, access: { has: obj => "acronym" in obj, get: obj => obj.acronym, set: (obj, value) => { obj.acronym = value; } }, metadata: _metadata }, _acronym_initializers, _acronym_extraInitializers);
            __esDecorate(null, null, _foundationYear_decorators, { kind: "field", name: "foundationYear", static: false, private: false, access: { has: obj => "foundationYear" in obj, get: obj => obj.foundationYear, set: (obj, value) => { obj.foundationYear = value; } }, metadata: _metadata }, _foundationYear_initializers, _foundationYear_extraInitializers);
            __esDecorate(null, null, _vision_decorators, { kind: "field", name: "vision", static: false, private: false, access: { has: obj => "vision" in obj, get: obj => obj.vision, set: (obj, value) => { obj.vision = value; } }, metadata: _metadata }, _vision_initializers, _vision_extraInitializers);
            __esDecorate(null, null, _mission_decorators, { kind: "field", name: "mission", static: false, private: false, access: { has: obj => "mission" in obj, get: obj => obj.mission, set: (obj, value) => { obj.mission = value; } }, metadata: _metadata }, _mission_initializers, _mission_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _name_initializers, void 0);
        acronym = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _acronym_initializers, void 0));
        foundationYear = (__runInitializers(this, _acronym_extraInitializers), __runInitializers(this, _foundationYear_initializers, void 0));
        vision = (__runInitializers(this, _foundationYear_extraInitializers), __runInitializers(this, _vision_initializers, void 0));
        mission = (__runInitializers(this, _vision_extraInitializers), __runInitializers(this, _mission_initializers, void 0));
        constructor() {
            __runInitializers(this, _mission_extraInitializers);
        }
    };
})();
let SeoSettingsDto = (() => {
    let _metaTitle_decorators;
    let _metaTitle_initializers = [];
    let _metaTitle_extraInitializers = [];
    let _metaDescription_decorators;
    let _metaDescription_initializers = [];
    let _metaDescription_extraInitializers = [];
    let _metaKeywords_decorators;
    let _metaKeywords_initializers = [];
    let _metaKeywords_extraInitializers = [];
    let _ogImage_decorators;
    let _ogImage_initializers = [];
    let _ogImage_extraInitializers = [];
    return class SeoSettingsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _metaTitle_decorators = [IsString(), IsOptional()];
            _metaDescription_decorators = [IsString(), IsOptional()];
            _metaKeywords_decorators = [IsString(), IsOptional()];
            _ogImage_decorators = [IsString(), IsOptional()];
            __esDecorate(null, null, _metaTitle_decorators, { kind: "field", name: "metaTitle", static: false, private: false, access: { has: obj => "metaTitle" in obj, get: obj => obj.metaTitle, set: (obj, value) => { obj.metaTitle = value; } }, metadata: _metadata }, _metaTitle_initializers, _metaTitle_extraInitializers);
            __esDecorate(null, null, _metaDescription_decorators, { kind: "field", name: "metaDescription", static: false, private: false, access: { has: obj => "metaDescription" in obj, get: obj => obj.metaDescription, set: (obj, value) => { obj.metaDescription = value; } }, metadata: _metadata }, _metaDescription_initializers, _metaDescription_extraInitializers);
            __esDecorate(null, null, _metaKeywords_decorators, { kind: "field", name: "metaKeywords", static: false, private: false, access: { has: obj => "metaKeywords" in obj, get: obj => obj.metaKeywords, set: (obj, value) => { obj.metaKeywords = value; } }, metadata: _metadata }, _metaKeywords_initializers, _metaKeywords_extraInitializers);
            __esDecorate(null, null, _ogImage_decorators, { kind: "field", name: "ogImage", static: false, private: false, access: { has: obj => "ogImage" in obj, get: obj => obj.ogImage, set: (obj, value) => { obj.ogImage = value; } }, metadata: _metadata }, _ogImage_initializers, _ogImage_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        metaTitle = __runInitializers(this, _metaTitle_initializers, void 0);
        metaDescription = (__runInitializers(this, _metaTitle_extraInitializers), __runInitializers(this, _metaDescription_initializers, void 0));
        metaKeywords = (__runInitializers(this, _metaDescription_extraInitializers), __runInitializers(this, _metaKeywords_initializers, void 0));
        ogImage = (__runInitializers(this, _metaKeywords_extraInitializers), __runInitializers(this, _ogImage_initializers, void 0));
        constructor() {
            __runInitializers(this, _ogImage_extraInitializers);
        }
    };
})();
let LogoSettingsDto = (() => {
    let _logoHeader_decorators;
    let _logoHeader_initializers = [];
    let _logoHeader_extraInitializers = [];
    let _logoFooter_decorators;
    let _logoFooter_initializers = [];
    let _logoFooter_extraInitializers = [];
    let _logoDark_decorators;
    let _logoDark_initializers = [];
    let _logoDark_extraInitializers = [];
    let _favicon_decorators;
    let _favicon_initializers = [];
    let _favicon_extraInitializers = [];
    return class LogoSettingsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _logoHeader_decorators = [IsString(), IsOptional()];
            _logoFooter_decorators = [IsString(), IsOptional()];
            _logoDark_decorators = [IsString(), IsOptional()];
            _favicon_decorators = [IsString(), IsOptional()];
            __esDecorate(null, null, _logoHeader_decorators, { kind: "field", name: "logoHeader", static: false, private: false, access: { has: obj => "logoHeader" in obj, get: obj => obj.logoHeader, set: (obj, value) => { obj.logoHeader = value; } }, metadata: _metadata }, _logoHeader_initializers, _logoHeader_extraInitializers);
            __esDecorate(null, null, _logoFooter_decorators, { kind: "field", name: "logoFooter", static: false, private: false, access: { has: obj => "logoFooter" in obj, get: obj => obj.logoFooter, set: (obj, value) => { obj.logoFooter = value; } }, metadata: _metadata }, _logoFooter_initializers, _logoFooter_extraInitializers);
            __esDecorate(null, null, _logoDark_decorators, { kind: "field", name: "logoDark", static: false, private: false, access: { has: obj => "logoDark" in obj, get: obj => obj.logoDark, set: (obj, value) => { obj.logoDark = value; } }, metadata: _metadata }, _logoDark_initializers, _logoDark_extraInitializers);
            __esDecorate(null, null, _favicon_decorators, { kind: "field", name: "favicon", static: false, private: false, access: { has: obj => "favicon" in obj, get: obj => obj.favicon, set: (obj, value) => { obj.favicon = value; } }, metadata: _metadata }, _favicon_initializers, _favicon_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        logoHeader = __runInitializers(this, _logoHeader_initializers, void 0);
        logoFooter = (__runInitializers(this, _logoHeader_extraInitializers), __runInitializers(this, _logoFooter_initializers, void 0));
        logoDark = (__runInitializers(this, _logoFooter_extraInitializers), __runInitializers(this, _logoDark_initializers, void 0));
        favicon = (__runInitializers(this, _logoDark_extraInitializers), __runInitializers(this, _favicon_initializers, void 0));
        constructor() {
            __runInitializers(this, _favicon_extraInitializers);
        }
    };
})();
let UpdateSettingsDto = (() => {
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
    return class UpdateSettingsDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _hero_decorators = [IsObject(), IsOptional(), ValidateNested(), Type(() => HeroSettingsDto)];
            _stats_decorators = [IsObject(), IsOptional(), ValidateNested(), Type(() => StatsSettingsDto)];
            _contact_decorators = [IsObject(), IsOptional(), ValidateNested(), Type(() => ContactSettingsDto)];
            _institution_decorators = [IsObject(), IsOptional(), ValidateNested(), Type(() => InstitutionSettingsDto)];
            _seo_decorators = [IsObject(), IsOptional(), ValidateNested(), Type(() => SeoSettingsDto)];
            _logo_decorators = [IsObject(), IsOptional(), ValidateNested(), Type(() => LogoSettingsDto)];
            _supportSection_decorators = [IsObject(), IsOptional()];
            _historySection_decorators = [IsObject(), IsOptional()];
            _engagementSection_decorators = [IsObject(), IsOptional()];
            _donationMessage_decorators = [IsString(), IsOptional()];
            _transparencyMessage_decorators = [IsObject(), IsOptional()];
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
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        hero = __runInitializers(this, _hero_initializers, void 0);
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
        constructor() {
            __runInitializers(this, _transparencyMessage_extraInitializers);
        }
    };
})();
export { UpdateSettingsDto };
