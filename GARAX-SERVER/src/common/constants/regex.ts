export const REGEX = {
  FIELDS: {
    /*
     * Username regex validation explain
     * Reference https://stackoverflow.com/a/12019115
     * ^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$
     * └─────┬────┘└───┬──┘└─────┬─────┘└─────┬─────┘ └───┬───┘
     *       │         │         │            │           no _ or . at the end
     *       │         │         │            │
     *       │         │         │            allowed characters
     *       │         │         │
     *       │         │         no __ or _. or ._ or .. inside
     *       │         │
     *       │         no _ or . at the beginning
     *       │
     *       username is 5-20 characters long
     */
    USERNAME: /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    PHONE: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  }
};
