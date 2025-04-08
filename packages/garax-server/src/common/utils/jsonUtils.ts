/* eslint-disable @typescript-eslint/no-explicit-any */
class JsonUtils {
  static jsonParse(options: string | undefined, defaultValue: any) {
    return options ? JSON.parse(options) : defaultValue;
  }
}

export default JsonUtils;
