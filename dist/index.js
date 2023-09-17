"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// setup Layout
app.use(express_ejs_layouts_1.default);
app.set('layout', 'Layouts/layout');
// setting the view engine
app.set('view engine', 'ejs');
// setting for the root path for views directory
app.set("views", path_1.default.join(__dirname, 'views'));
// setting for the root path for public directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => res.render('home'));
app.get('/cours/tous', (req, res) => res.render('cours'));
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map