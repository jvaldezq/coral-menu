export class UserDto {
    public id: string;
    public createdAt: string;
    public updatedAt: string;
    public name: string;
    public email: string;
    public password: string;
    public restaurantId: number | null;
  
    public constructor(user?: UserDto) {
      this.id = user?.id ?? '';
      this.createdAt = user?.createdAt ?? '';
      this.updatedAt = user?.updatedAt ?? '';
      this.name = user?.name ?? '';
      this.email = user?.email ?? '';
      this.password = user?.password ?? '';
      this.restaurantId = user?.restaurantId ?? null;
    }
  }