"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = __importDefault(require("path"));
const sequence_1 = require("./sequence");
const authentication_1 = require("@loopback/authentication");
const auth_1 = require("./auth");
const logger_1 = require("./logger");
class Kello extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        process.env.requests = '0';
        process.env.homePage = '0';
        process.env.productPage = '0'; //
        process.env.successResponses = '0';
        process.env.errorResponses = '0';
        process.env.lastResponseTime = '0';
        process.env.avgResponseTime = '0';
        process.env.kelloConfigs = '';
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        this.static('/shopping', path_1.default.join(__dirname, '../public/customer_client'));
        this.static('/customer_client/assets', path_1.default.join(__dirname, '../public/customer_client/customer_client/assets'));
        this.static('/customer_client/runtime.js', path_1.default.join(__dirname, '../public/customer_client/runtime.js'));
        this.static('/customer_client/polyfills.js', path_1.default.join(__dirname, '../public/customer_client/polyfills.js'));
        this.static('/customer_client/styles.js', path_1.default.join(__dirname, '../public/customer_client/styles.js'));
        this.static('/customer_client/vendor.js', path_1.default.join(__dirname, '../public/customer_client/vendor.js'));
        this.static('/customer_client/vendor.js', path_1.default.join(__dirname, '../public/admin_client/vendor.js'));
        this.static('/customer_client/main.js', path_1.default.join(__dirname, '../public/customer_client/main.js'));
        this.static('/app', path_1.default.join(__dirname, '../public/admin_client'));
        this.static('/assets', path_1.default.join(__dirname, '../public/admin_client/assets'));
        this.static('/runtime.js', path_1.default.join(__dirname, '../public/admin_client/runtime.js'));
        this.static('/polyfills.js', path_1.default.join(__dirname, '../public/admin_client/polyfills.js'));
        this.static('/styles.js', path_1.default.join(__dirname, '../public/admin_client/styles.js'));
        this.static('/vendor.js', path_1.default.join(__dirname, '../public/admin_client/vendor.js'));
        this.static('/vendor.js', path_1.default.join(__dirname, '../public/admin_client/vendor.js'));
        this.static('/main.js', path_1.default.join(__dirname, '../public/admin_client/main.js'));
        this.static('/products/images', path_1.default.join(__dirname, '../public/products/images'));
        this.static('/promotions/images', path_1.default.join(__dirname, '../public/promotions/images'));
        // Customize @loopback/rest-explorer configuration here
        // this.bind(RestExplorerBindings.CONFIG).to({
        //   path: '/explorer',
        // });
        // this.configure(RestExplorerBindings.COMPONENT).to({
        //   path: '/explorer',
        // });
        this.component(rest_explorer_1.RestExplorerComponent);
        //this.component(AuthenticationComponent);
        this.bind(authentication_1.AuthenticationBindings.METADATA).toProvider(auth_1.MyAuthMetadataProvider);
        this.bind(auth_1.MyAuthBindings.STRATEGY).toProvider(auth_1.MyAuthAuthenticationStrategyProvider);
        this.bind(authentication_1.AuthenticationBindings.AUTH_ACTION).toProvider(auth_1.MyAuthActionProvider);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        //@repository(ConfigurationsRepository)
        // let configurationsRepository : ConfigurationsRepository;
        //   async ()=>{
        //     const configurations = await configurationsRepository.find();
        //     let configuration = JSON.stringify(configurations[0])
        //     logger.debug(`configuration loaded .. ${configuration} `);
        //     process.env.kelloConfigs = configuration;
        //   }
    }
}
exports.Kello = Kello;
setInterval(() => {
    console.log(`
  total requests: ${process.env.requests}
  total success responses: ${process.env.successResponses}
  total error responses: ${process.env.errorResponses}
  last response time: ${process.env.lastResponseTime} ms
  avg response time: ${process.env.avgResponseTime} ms
  total home page: ${process.env.homePage}
  total product page: ${process.env.productPage}
  `);
    logger_1.winstonLogger.info(`
  total requests: ${process.env.requests}
  total success responses: ${process.env.successResponses}
  total error responses: ${process.env.errorResponses}
  last response time: ${process.env.lastResponseTime} ms
  avg response time: ${process.env.avgResponseTime} ms
  total home page: ${process.env.homePage}
  total product page: ${process.env.productPage}
  `);
}, 1000 * 10);
//# sourceMappingURL=application.js.map