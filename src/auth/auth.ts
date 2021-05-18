class Authentification {

    private static _token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTG91aXNDaG9pbmllcmUiLCJhZG1pbiI6dHJ1ZX0.gABx767L4SfjnlKX4PQOmsiP8CLD0aIEMrmk3iSLE3o';

    static getToken() {
        return this._token;
    }

    static isValid(token) {

        if(!token)
            return false;

        if (token.substring(7) == this._token)
            return true;

        return false;
    }
}

export default Authentification