import {
    RouteReuseStrategy,
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
    RouterModule,
    Routes,
    UrlSegment
} from '@angular/router';
export class CacheReuseStrategy implements RouteReuseStrategy {
    private handlers: { [key: string]: DetachedRouteHandle } = {};
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        let shouldReuse = false;
        if (route.routeConfig.data) {
            route.routeConfig.data.reUse ? shouldReuse = true : shouldReuse = false;
        }
        return shouldReuse;
    }
    store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
        if (handler) {
            this.handlers[this.getUrl(route)] = handler;
        }
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.handlers[this.getUrl(route)];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) return null;
        if (route.routeConfig.loadChildren) return null;
        return this.handlers[this.getUrl(route)];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
        let reUseUrl = false;
        if (future.routeConfig) {
            if (future.routeConfig.data) {
                reUseUrl = future.routeConfig.data.reUse;
            }
        }
        const defaultReuse = (future.routeConfig === current.routeConfig);
        return reUseUrl || defaultReuse;
    }
    getUrl(route: ActivatedRouteSnapshot): string {
        if (route.routeConfig) {
            const url = route.routeConfig.path;
            return url;
        }
    }
}