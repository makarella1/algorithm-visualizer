import * as Label from '@radix-ui/react-label';
import * as Slider from '@radix-ui/react-slider';

interface SortSliderProps {
  label: string;
  min: number;
  step?: number;
  max: number;
  value: [number];
  onValueChange: ([value]: [number]) => void;
  defaultValue: [number];
  id: string;
}

export const SortSlider = (props: SortSliderProps) => {
  const { label, value, ...otherProps } = props;

  const [textValue] = value;

  return (
    <div className="w-full">
      <Label.Root className="mb-1" htmlFor="length">
        {label}:
      </Label.Root>
      <Slider.Root
        className="relative flex h-5 w-full items-center"
        value={value}
        {...otherProps}
      >
        <Slider.Track className="relative h-1 w-full rounded-full bg-gray-700">
          <Slider.Range className="absolute h-full rounded-full bg-white" />
        </Slider.Track>
        <Slider.Thumb className="relative block h-4 w-4 rounded-full bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">
          <p className="absolute top-5 text-xs">{textValue}</p>
        </Slider.Thumb>
      </Slider.Root>
    </div>
  );
};
