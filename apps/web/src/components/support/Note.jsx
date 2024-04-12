function Note() {
  return (
    <div className="dark:bg-darkblack-600 rounded-lg bg-white p-8">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-bgray-900 text-base font-bold dark:text-white">Note</h4>
        <button aria-label="none" className="text-success-300 text-sm font-medium">
          Edit
        </button>
      </div>
      <div>
        <p className="text-bgray-600 text-base font-medium">No notes from customer</p>
      </div>
    </div>
  );
}

export default Note;
