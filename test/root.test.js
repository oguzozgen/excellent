describe('positive', () => {

    afterEach(() => {
        document.body.innerHTML = '';
        jest.resetModules();
    });

    it('must have all the right properties', () => {
        require('../src/excellent');
        const e = excellent;
        expect(e && e.constructor && e.constructor.name).toBe('ERoot');
        expect(e.services).toEqual({});
        expect(e.version).toBe('<version>');
        expect(typeof e.addController).toBe('function');
        expect(typeof e.addModule).toBe('function');
        expect(typeof e.addService).toBe('function');
        expect(typeof e.bind).toBe('function');
        expect(typeof e.find).toBe('function');
        expect(typeof e.findControllers).toBe('function');
        expect(e.onInit).toBeUndefined();
    });

    it('should add alternative name with e-bind', () => {
        const name = 'alternateName1';
        expect(window[name]).toBeUndefined();
        document.body.innerHTML = `<div e-root="${name}"></div>`;
        require('../src/excellent');
        expect(window[name]).toBe(excellent);
        delete window[name];
    });

    it('should add alternative name with data-e-bind', () => {
        const name = 'alternateName2';
        expect(window[name]).toBeUndefined();
        document.body.innerHTML = `<div data-e-root="${name}"></div>`;
        require('../src/excellent');
        expect(window[name]).toBe(excellent);
        delete window[name];
    });

    it('should prioritize data-e-root over e-root', () => {
        const name1 = 'alternateName1', name2 = 'alternateName2';
        expect(window[name1]).toBeUndefined();
        expect(window[name2]).toBeUndefined();
        document.body.innerHTML = `<div e-root="${name1}" data-e-root="${name2}"></div>`;
        require('../src/excellent');
        expect(window[name1]).toBeUndefined();
        expect(window[name2]).toBe(excellent);
        delete window[name2];
    });

    it('should call onInit on DOMContentLoaded', () => {
        require('../src/excellent');
        excellent.onInit = jest.fn();
        window.document.dispatchEvent(new Event('DOMContentLoaded', {}));
        expect(excellent.onInit).toBeCalled();
    });

});

describe('negative', () => {

    afterEach(() => {
        document.body.innerHTML = '';
        jest.resetModules();
    });

    it('should fail with multiple root elements specified', () => {
        document.body.innerHTML = '<div e-root="name1"></div><div e-root="name2"></div>';
        expect(() => require('../src/excellent')).toThrow('Multiple root elements are not allowed.');
    });
    it('should fail on an invalid alternate name', () => {
        document.body.innerHTML = '<div e-root="123"></div>';
        expect(() => require('../src/excellent')).toThrow('Invalid "123" root name specified.');
    });

});
