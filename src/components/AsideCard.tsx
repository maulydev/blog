type Props = {
  title: string;
  children: React.ReactNode;
};

const AsideCard = ({ title = "Title", children }: Props) => {
  return (
    <section className="border dark:border-gray-700 rounded">
      <div className="bg-gray-900 text-white px-4 py-2 rounded-t">{title}</div>
      <div className="p-4">{children}</div>
    </section>
  );
};

export default AsideCard;
