import { Plus, Edit, Trash2 } from 'lucide-react';

interface ActionButtonsProps {
  onAdd?: () => void;
  onUpdate?: () => void;
  onDelete?: () => void;
  size?: 'sm' | 'md';
}

export function ActionButtons({ onAdd, onUpdate, onDelete, size = 'md' }: ActionButtonsProps) {
  const buttonSizeClass = size === 'sm' ? 'px-3 py-1.5' : 'px-4 py-2';
  const iconSizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className="flex items-center gap-2">
      {onAdd && (
        <button
          onClick={onAdd}
          className={`${buttonSizeClass} bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2`}
        >
          <Plus className={iconSizeClass} />
          Add
        </button>
      )}
      {onUpdate && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onUpdate();
          }}
          className={`${buttonSizeClass} bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2`}
        >
          <Edit className={iconSizeClass} />
          Update
        </button>
      )}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className={`${buttonSizeClass} bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2`}
        >
          <Trash2 className={iconSizeClass} />
          Delete
        </button>
      )}
    </div>
  );
}
