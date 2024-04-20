/*Реализуйте тип Admin, который является пересечением типов AdminPermission и User.
Реализуйте функцию addAdmin(), которая принимает значение с типом User и возвращает значение с типом Admin.
В качестве значения для свойства permission должно быть значение Permission.READ. */

enum Permission {
  READ,
  WRITE,
  DELETE,
}

type User = {
  login: string,
};

type AdminPermission = {
  permission: Permission,
};

type Admin = User & AdminPermission;

const addAdmin = (user: User): Admin => ({ ...user, permission: Permission.READ });

export { User, Admin, Permission };
export default addAdmin;
