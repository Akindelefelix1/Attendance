import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminUserModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminUserPayload>;
export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null;
    _min: AdminUserMinAggregateOutputType | null;
    _max: AdminUserMaxAggregateOutputType | null;
};
export type AdminUserMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    email: string | null;
    passwordHash: string | null;
    appRole: $Enums.AppRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdminUserMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    email: string | null;
    passwordHash: string | null;
    appRole: $Enums.AppRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdminUserCountAggregateOutputType = {
    id: number;
    organizationId: number;
    email: number;
    passwordHash: number;
    appRole: number;
    permissions: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AdminUserMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    passwordHash?: true;
    appRole?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdminUserMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    passwordHash?: true;
    appRole?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdminUserCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    passwordHash?: true;
    appRole?: true;
    permissions?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AdminUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminUserCountAggregateInputType;
    _min?: AdminUserMinAggregateInputType;
    _max?: AdminUserMaxAggregateInputType;
};
export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminUser[P]> : Prisma.GetScalarType<T[P], AggregateAdminUser[P]>;
};
export type AdminUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithAggregationInput | Prisma.AdminUserOrderByWithAggregationInput[];
    by: Prisma.AdminUserScalarFieldEnum[] | Prisma.AdminUserScalarFieldEnum;
    having?: Prisma.AdminUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminUserCountAggregateInputType | true;
    _min?: AdminUserMinAggregateInputType;
    _max?: AdminUserMaxAggregateInputType;
};
export type AdminUserGroupByOutputType = {
    id: string;
    organizationId: string;
    email: string;
    passwordHash: string;
    appRole: $Enums.AppRole;
    permissions: $Enums.Permission[];
    createdAt: Date;
    updatedAt: Date;
    _count: AdminUserCountAggregateOutputType | null;
    _min: AdminUserMinAggregateOutputType | null;
    _max: AdminUserMaxAggregateOutputType | null;
};
type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminUserGroupByOutputType[P]>;
}>>;
export type AdminUserWhereInput = {
    AND?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    OR?: Prisma.AdminUserWhereInput[];
    NOT?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    id?: Prisma.StringFilter<"AdminUser"> | string;
    organizationId?: Prisma.StringFilter<"AdminUser"> | string;
    email?: Prisma.StringFilter<"AdminUser"> | string;
    passwordHash?: Prisma.StringFilter<"AdminUser"> | string;
    appRole?: Prisma.EnumAppRoleFilter<"AdminUser"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"AdminUser">;
    createdAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type AdminUserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    permissions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId_email?: Prisma.AdminUserOrganizationIdEmailCompoundUniqueInput;
    AND?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    OR?: Prisma.AdminUserWhereInput[];
    NOT?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    organizationId?: Prisma.StringFilter<"AdminUser"> | string;
    email?: Prisma.StringFilter<"AdminUser"> | string;
    passwordHash?: Prisma.StringFilter<"AdminUser"> | string;
    appRole?: Prisma.EnumAppRoleFilter<"AdminUser"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"AdminUser">;
    createdAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "organizationId_email">;
export type AdminUserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    permissions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AdminUserCountOrderByAggregateInput;
    _max?: Prisma.AdminUserMaxOrderByAggregateInput;
    _min?: Prisma.AdminUserMinOrderByAggregateInput;
};
export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminUserScalarWhereWithAggregatesInput | Prisma.AdminUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminUserScalarWhereWithAggregatesInput | Prisma.AdminUserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdminUser"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"AdminUser"> | string;
    email?: Prisma.StringWithAggregatesFilter<"AdminUser"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"AdminUser"> | string;
    appRole?: Prisma.EnumAppRoleWithAggregatesFilter<"AdminUser"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"AdminUser">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdminUser"> | Date | string;
};
export type AdminUserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.AdminUserCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAdminsInput;
};
export type AdminUserUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    email: string;
    passwordHash: string;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.AdminUserCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdminUserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.AdminUserUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAdminsNestedInput;
};
export type AdminUserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.AdminUserUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserCreateManyInput = {
    id?: string;
    organizationId: string;
    email: string;
    passwordHash: string;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.AdminUserCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdminUserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.AdminUserUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.AdminUserUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserListRelationFilter = {
    every?: Prisma.AdminUserWhereInput;
    some?: Prisma.AdminUserWhereInput;
    none?: Prisma.AdminUserWhereInput;
};
export type AdminUserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminUserOrganizationIdEmailCompoundUniqueInput = {
    organizationId: string;
    email: string;
};
export type AdminUserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    permissions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdminUserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdminUserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdminUserCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutOrganizationInput, Prisma.AdminUserUncheckedCreateWithoutOrganizationInput> | Prisma.AdminUserCreateWithoutOrganizationInput[] | Prisma.AdminUserUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutOrganizationInput | Prisma.AdminUserCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AdminUserCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
};
export type AdminUserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutOrganizationInput, Prisma.AdminUserUncheckedCreateWithoutOrganizationInput> | Prisma.AdminUserCreateWithoutOrganizationInput[] | Prisma.AdminUserUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutOrganizationInput | Prisma.AdminUserCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AdminUserCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
};
export type AdminUserUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutOrganizationInput, Prisma.AdminUserUncheckedCreateWithoutOrganizationInput> | Prisma.AdminUserCreateWithoutOrganizationInput[] | Prisma.AdminUserUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutOrganizationInput | Prisma.AdminUserCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AdminUserUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AdminUserUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AdminUserCreateManyOrganizationInputEnvelope;
    set?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    disconnect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    delete?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    update?: Prisma.AdminUserUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AdminUserUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AdminUserUpdateManyWithWhereWithoutOrganizationInput | Prisma.AdminUserUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
};
export type AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutOrganizationInput, Prisma.AdminUserUncheckedCreateWithoutOrganizationInput> | Prisma.AdminUserCreateWithoutOrganizationInput[] | Prisma.AdminUserUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutOrganizationInput | Prisma.AdminUserCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AdminUserUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AdminUserUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AdminUserCreateManyOrganizationInputEnvelope;
    set?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    disconnect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    delete?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    update?: Prisma.AdminUserUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AdminUserUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AdminUserUpdateManyWithWhereWithoutOrganizationInput | Prisma.AdminUserUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
};
export type AdminUserCreatepermissionsInput = {
    set: $Enums.Permission[];
};
export type AdminUserUpdatepermissionsInput = {
    set?: $Enums.Permission[];
    push?: $Enums.Permission | $Enums.Permission[];
};
export type AdminUserCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.AdminUserCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdminUserUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.AdminUserCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdminUserCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutOrganizationInput, Prisma.AdminUserUncheckedCreateWithoutOrganizationInput>;
};
export type AdminUserCreateManyOrganizationInputEnvelope = {
    data: Prisma.AdminUserCreateManyOrganizationInput | Prisma.AdminUserCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type AdminUserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutOrganizationInput, Prisma.AdminUserUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutOrganizationInput, Prisma.AdminUserUncheckedCreateWithoutOrganizationInput>;
};
export type AdminUserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutOrganizationInput, Prisma.AdminUserUncheckedUpdateWithoutOrganizationInput>;
};
export type AdminUserUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.AdminUserScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateManyMutationInput, Prisma.AdminUserUncheckedUpdateManyWithoutOrganizationInput>;
};
export type AdminUserScalarWhereInput = {
    AND?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
    OR?: Prisma.AdminUserScalarWhereInput[];
    NOT?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
    id?: Prisma.StringFilter<"AdminUser"> | string;
    organizationId?: Prisma.StringFilter<"AdminUser"> | string;
    email?: Prisma.StringFilter<"AdminUser"> | string;
    passwordHash?: Prisma.StringFilter<"AdminUser"> | string;
    appRole?: Prisma.EnumAppRoleFilter<"AdminUser"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"AdminUser">;
    createdAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
};
export type AdminUserCreateManyOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.AdminUserCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdminUserUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.AdminUserUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.AdminUserUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.AdminUserUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminUser"]>;
export type AdminUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminUser"]>;
export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminUser"]>;
export type AdminUserSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AdminUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "email" | "passwordHash" | "appRole" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>;
export type AdminUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type AdminUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $AdminUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminUser";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        email: string;
        passwordHash: string;
        appRole: $Enums.AppRole;
        permissions: $Enums.Permission[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["adminUser"]>;
    composites: {};
};
export type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminUserPayload, S>;
export type AdminUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminUserCountAggregateInputType | true;
};
export interface AdminUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'];
        meta: {
            name: 'AdminUser';
        };
    };
    findUnique<T extends AdminUserFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminUserFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminUserFindManyArgs>(args?: Prisma.SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminUserCreateArgs>(args: Prisma.SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminUserCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminUserDeleteArgs>(args: Prisma.SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminUserUpdateArgs>(args: Prisma.SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminUserUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminUserUpsertArgs>(args: Prisma.SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminUserCountArgs>(args?: Prisma.Subset<T, AdminUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminUserCountAggregateOutputType> : number>;
    aggregate<T extends AdminUserAggregateArgs>(args: Prisma.Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>;
    groupBy<T extends AdminUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminUserGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminUserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminUserFieldRefs;
}
export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminUserFieldRefs {
    readonly id: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly organizationId: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly email: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly appRole: Prisma.FieldRef<"AdminUser", 'AppRole'>;
    readonly permissions: Prisma.FieldRef<"AdminUser", 'Permission[]'>;
    readonly createdAt: Prisma.FieldRef<"AdminUser", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AdminUser", 'DateTime'>;
}
export type AdminUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type AdminUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type AdminUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type AdminUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUserCreateInput, Prisma.AdminUserUncheckedCreateInput>;
};
export type AdminUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminUserCreateManyInput | Prisma.AdminUserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    data: Prisma.AdminUserCreateManyInput | Prisma.AdminUserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdminUserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdminUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUserUpdateInput, Prisma.AdminUserUncheckedUpdateInput>;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminUserUpdateManyMutationInput, Prisma.AdminUserUncheckedUpdateManyInput>;
    where?: Prisma.AdminUserWhereInput;
    limit?: number;
};
export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUserUpdateManyMutationInput, Prisma.AdminUserUncheckedUpdateManyInput>;
    where?: Prisma.AdminUserWhereInput;
    limit?: number;
    include?: Prisma.AdminUserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdminUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateInput, Prisma.AdminUserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminUserUpdateInput, Prisma.AdminUserUncheckedUpdateInput>;
};
export type AdminUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
    limit?: number;
};
export type AdminUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
};
export {};
