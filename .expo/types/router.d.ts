/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/GetStarted` | `/Navigation/TabNavigation` | `/Screens/OnboardingScreen/Screen1` | `/Screens/OnboardingScreen/Screen2` | `/Screens/OnboardingScreen/Screen3` | `/Screens/layout` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
