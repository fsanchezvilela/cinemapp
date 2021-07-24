import React, { LegacyRef, MouseEventHandler } from 'react';
import cs from 'classnames';
import style from './Button.module.scss';

export interface Props {
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
  buttonSize?: 's' | 'm' | 'l';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  buttonStyle?:
    | 'subtle'
    | 'primary'
    | 'primary-solid'
    | 'secondary'
    | 'secondary-alternative'
    | 'ghost'
    | 'accent'
    | 'danger'
    | 'transparent'
    | 'transparent-light';
  linkTag?: boolean;
  innerRef?: LegacyRef<Ref>;
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  svgFill?: 'fill-svg' | 'fill-path' | 'none';
  noTargetBlank?: boolean;
}

type Ref = HTMLButtonElement;

class Button extends React.Component<Props> {
  render(): React.ReactNode {
    const {
      children,
      buttonSize = 'm',
      buttonStyle = 'primary',
      className,
      icon,
      type = 'button',
      linkTag = false,
      iconPosition = 'left',
      iconClassName,
      innerRef,
      svgFill = 'fill-path',
      href,
      noTargetBlank = false,
      ...props
    } = this.props;

    const CustomTag = linkTag ? 'a' : 'button';
    const isLeft = iconPosition === 'left';
    const isRight = iconPosition === 'right';
    const linkAttributes =
      !href || noTargetBlank
        ? { href }
        : { href, target: '_blank', rel: 'noopener noreferrer' };

    return (
      <CustomTag
        ref={innerRef as any}
        type={type}
        onKeyPress={this.handleKeypress}
        className={cs(
          style['button'],
          style[buttonSize],
          style[buttonStyle],
          style[svgFill],
          className
        )}
        {...props}
        {...linkAttributes}
      >
        {isLeft && icon && (
          <figure
            className={cs(
              style['button__figure'],
              style['button__figure--left'],
              iconClassName
            )}
          >
            {icon}
          </figure>
        )}
        {children}
        {isRight && icon && (
          <figure
            className={cs(
              style['button__figure'],
              style['button__figure--right'],
              iconClassName
            )}
          >
            {icon}
          </figure>
        )}
      </CustomTag>
    );
  }

  handleKeypress = (e: React.KeyboardEvent) =>
    e.charCode === 13 && this.props.onClick && this.props.onClick(e);
}

export default React.forwardRef<Ref, Props>((props, ref) => (
  <Button innerRef={ref} {...props} />
));
