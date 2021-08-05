import { animate, animateChild, animation, AnimationReferenceMetadata, AnimationTriggerMetadata, AUTO_STYLE, group, keyframes, query, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { IAnimationOptions, IAttentionSeekerAnimationOptions } from './interfaces.interface';

export interface IPulseAnimationOptions extends IAttentionSeekerAnimationOptions {
    /**
     * Scale factor
     *
     * Default: 1.05
     */
    scale?: number;
}

const pulse = () =>
    animation([
        animate(
            '{{duration}}ms {{delay}}ms',
            keyframes([
                style({ visibility: AUTO_STYLE, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
                style({ transform: 'scale3d({{scale}}, {{scale}}, {{scale}})', easing: 'ease', offset: 0.5 }),
                style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
            ])
        )
    ]);

const DEFAULT_DURATION = 1000;

export function pulseAnimation(options?: IPulseAnimationOptions): AnimationTriggerMetadata {
    return trigger((options && options.anchor) || 'pulse', [
        transition(`0 ${(options && options.direction) || '<=>'} 1`, [...useAnimationIncludingChildren(pulse(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                scale: (options && options.scale) || 1.05
            }
        })
    ]);
}

export function pulseOnEnterAnimation(options?: IPulseAnimationOptions): AnimationTriggerMetadata {
    return trigger((options && options.anchor) || 'pulseOnEnter', [
        transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(pulse(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                scale: (options && options.scale) || 1.05
            }
        })
    ]);
}

export function useAnimationIncludingChildren(animation: AnimationReferenceMetadata, options?: IAnimationOptions) {
    return [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
            useAnimation(animation),
            ...(!options || !options.animateChildren || options.animateChildren === 'together'
                ? [query('@*', animateChild(), { optional: true })]
                : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
    ];
}

// Post by Gerard Sans: https://medium.com/google-developer-experts/angular-2-animate-router-transitions-6de179e00204#.7h2femijg

// Add <script src="https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script> into index.html for polyfill
// Add the following to any component to animate the view
// import { routerTransition } from './router.animations';

// @Component({
//   selector: 'home',
//   template: `<h1>Home</h1>`,
//   animations: [routerTransition()],
//   host: {'[@routerTransition]': ''}
// })

export function routerTransition() {
    return slideToLeft();
}

function slideToRight() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '40%' })),
        state('*', style({ position: 'fixed', width: '0%' })),
        transition(':enter', [
            style({ transform: 'translateX(-40%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(40%)' }))
        ])
    ]);
}

function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '40%' })),
        state('*', style({ position: 'fixed', width: '0%' })),
        transition(':enter', [
            style({ transform: 'translateX(40%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-40%)' }))
        ])
    ]);
}

function slideToBottom() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]);
}

function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}

// Routable animations
export const slideInAnimation =
    trigger('routeAnimation', [
        transition('heroes <=> hero', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);


export const showHideNavBarButtons =
    trigger('showHideNavBarButtons', [
        state('open', style({
            height: '200px',
            opacity: 1,
            backgroundColor: 'yellow'
        })),
        state('closed', style({
            height: '100px',
            opacity: 0.8,
            backgroundColor: '#c6ecff'
        })),
        transition('open => closed', [
            animate('1s')
        ]),
        transition('closed => open', [
            animate('0.5s')
        ]),
    ]);