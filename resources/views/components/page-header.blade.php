    @if ($isWebPage)
        <header class="relative bg-slate-100 md:px-8">
            <div class="relative container mx-auto px-5 pb-8 pt-8 text-xl  space-x-6 flex justify-start  items-center">
                <x-back-button />
                <h1 class=" text-xl text-gray-800 leading-tight flex items-center">
                    {{ $title }}
                    
                    @if (!empty($icon))
                        <div class="pageheader-icon w-12 aspect-square text-[#333] ml-10  inline opacity-30">
                            {!! $icon !!}
                        </div>
                    @endif
                </h1>
            </div>
        </header>
    @endif
