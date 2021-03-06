import { trigger, AnimationTriggerMetadata } from '@angular/animations';

import { fadingAnimations } from './fade.animation';
import { scalingAnimations } from './scale.animation';
import { slidingAnimations } from './slide.animation';

export type AnimationType = 'scale' | 'slide' | 'fade';
export const DEFAULT_LF_ANIMATION_TIMING = '250ms 0ms ease-out';

export function LuFadeAnimationFactory(
	animationInTiming: string = DEFAULT_LF_ANIMATION_TIMING,
	animationOutTiming: string = DEFAULT_LF_ANIMATION_TIMING,
	triggerName: string = 'fadeAnimation',
): AnimationTriggerMetadata {
	return trigger(triggerName, [...fadingAnimations(animationInTiming, animationOutTiming)]);
}
export function LuScaleAnimationFactory(
	animationInTiming: string = DEFAULT_LF_ANIMATION_TIMING,
	animationOutTiming: string = DEFAULT_LF_ANIMATION_TIMING,
	triggerName: string = 'scaleAnimation',
): AnimationTriggerMetadata {
	return trigger(triggerName, [...scalingAnimations(animationInTiming, animationOutTiming)]);
}
export function LuSlideAnimationFactory(
	animationInTiming: string = DEFAULT_LF_ANIMATION_TIMING,
	animationOutTiming: string = DEFAULT_LF_ANIMATION_TIMING,
	triggerName: string = 'slideAnimation',
): AnimationTriggerMetadata {
	return trigger(triggerName, [...slidingAnimations(animationInTiming, animationOutTiming)]);
}
